/* =========================================================
   O Melhor Bolo de Cenoura — JavaScript
   Autor: João Gabriel
   Funcionalidades:
     1.  Preloader
     2.  Barra de progresso de leitura
     3.  Botão de apetite (alerta original)
     4.  Calculadora de porções
     5.  Tema claro / escuro (com persistência)
     6.  Voltar ao topo
     7.  Animações ao rolar (Intersection Observer)
     8.  Marcação de ingredientes (com persistência)
     9.  Marcação de passos com progresso (com confetes!)
    10.  Cronômetro do forno
    11.  Imprimir receita
    12.  Compartilhar receita (Web Share API)
    13.  Lightbox da galeria
    14.  Avaliação por estrelas
    15.  Formulário de newsletter
    16.  Toast de notificação
    17.  Animação de confetes
========================================================= */

document.addEventListener('DOMContentLoaded', function () {

    /* ------------------------------------------
       Toast de notificação
    ------------------------------------------ */
    const toast = document.getElementById('toast');
    let toastTimeout;

    function mostrarToast(mensagem) {
        if (!toast) return;
        toast.textContent = mensagem;
        toast.classList.add('visivel');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(function () {
            toast.classList.remove('visivel');
        }, 3000);
    }

    /* ------------------------------------------
       1) Preloader
    ------------------------------------------ */
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', function () {
        setTimeout(function () {
            if (preloader) preloader.classList.add('escondido');
        }, 600);
    });

    setTimeout(function () {
        if (preloader) preloader.classList.add('escondido');
    }, 2500);

    /* ------------------------------------------
       2) Barra de progresso de leitura
    ------------------------------------------ */
    const barraProgresso = document.getElementById('barra-progresso');

    function atualizarProgressoLeitura() {
        if (!barraProgresso) return;
        const altura = document.documentElement.scrollHeight - window.innerHeight;
        const progresso = (window.scrollY / altura) * 100;
        barraProgresso.style.width = Math.min(progresso, 100) + '%';
    }

    window.addEventListener('scroll', atualizarProgressoLeitura);

    /* ------------------------------------------
       3) Botão de apetite
    ------------------------------------------ */
    const botaoApetite = document.getElementById('botao-apetite');
    if (botaoApetite) {
        botaoApetite.addEventListener('click', function () {
            alert('Bom apetite! Prepare o café!');
        });
    }

    /* ------------------------------------------
       4) Calculadora de porções
    ------------------------------------------ */
    const PORCOES_BASE = 10;
    let porcoesAtuais = PORCOES_BASE;

    const valorPorcoes = document.getElementById('porcoes-valor');
    const numeroPorcoes = document.getElementById('numero-porcoes');
    const botaoMais = document.getElementById('porcoes-mais');
    const botaoMenos = document.getElementById('porcoes-menos');
    const quantidades = document.querySelectorAll('.quantidade');

    function formatarNumero(n) {
        const arredondado = Math.round(n * 4) / 4;
        const inteiro = Math.floor(arredondado);
        const fracao = arredondado - inteiro;

        let textoFracao = '';
        if (fracao === 0.25) textoFracao = '1/4';
        else if (fracao === 0.5) textoFracao = '1/2';
        else if (fracao === 0.75) textoFracao = '3/4';

        if (inteiro === 0 && textoFracao) return textoFracao;
        if (inteiro > 0 && textoFracao) return inteiro + ' e ' + textoFracao;
        if (arredondado % 1 !== 0) return arredondado.toFixed(1).replace('.', ',');
        return String(inteiro);
    }

    function atualizarQuantidades() {
        const fator = porcoesAtuais / PORCOES_BASE;

        quantidades.forEach(function (el) {
            const base = parseFloat(el.dataset.base);
            const unidade = el.dataset.unidade;
            const novoValor = base * fator;
            el.textContent = formatarNumero(novoValor) + ' ' + unidade;
        });

        if (valorPorcoes) {
            valorPorcoes.textContent = porcoesAtuais;
            valorPorcoes.classList.add('atualizando');
            setTimeout(function () {
                valorPorcoes.classList.remove('atualizando');
            }, 300);
        }
        if (numeroPorcoes) numeroPorcoes.textContent = porcoesAtuais;
    }

    if (botaoMais) {
        botaoMais.addEventListener('click', function () {
            if (porcoesAtuais < 50) {
                porcoesAtuais += 2;
                atualizarQuantidades();
            }
        });
    }

    if (botaoMenos) {
        botaoMenos.addEventListener('click', function () {
            if (porcoesAtuais > 2) {
                porcoesAtuais -= 2;
                atualizarQuantidades();
            }
        });
    }

    /* ------------------------------------------
       5) Tema claro / escuro (com persistência)
    ------------------------------------------ */
    const botaoTema = document.getElementById('botao-tema');
    const iconeTema = document.querySelector('.icone-tema');

    // Restaurar tema salvo
    try {
        const temaSalvo = localStorage.getItem('bolo-tema');
        if (temaSalvo === 'escuro') {
            document.body.classList.add('tema-escuro');
            if (iconeTema) iconeTema.textContent = '☀️';
        }
    } catch (e) {
        // localStorage indisponível — segue normal
    }

    if (botaoTema && iconeTema) {
        botaoTema.addEventListener('click', function () {
            document.body.classList.toggle('tema-escuro');
            const escuro = document.body.classList.contains('tema-escuro');
            iconeTema.textContent = escuro ? '☀️' : '🌙';
            mostrarToast(escuro ? 'Modo escuro ativado 🌙' : 'Modo claro ativado ☀️');

            try {
                localStorage.setItem('bolo-tema', escuro ? 'escuro' : 'claro');
            } catch (e) { /* ignora */ }
        });
    }

    /* ------------------------------------------
       6) Voltar ao topo
    ------------------------------------------ */
    const botaoTopo = document.getElementById('botao-topo');

    if (botaoTopo) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) {
                botaoTopo.classList.add('visivel');
            } else {
                botaoTopo.classList.remove('visivel');
            }
        });

        botaoTopo.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ------------------------------------------
       7) Animações ao rolar
    ------------------------------------------ */
    const elementosAnimar = document.querySelectorAll('.animar-ao-rolar');

    if ('IntersectionObserver' in window) {
        const observador = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('visivel');
                    observador.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

        elementosAnimar.forEach(function (el) {
            observador.observe(el);
        });
    } else {
        elementosAnimar.forEach(function (el) {
            el.classList.add('visivel');
        });
    }

    /* ------------------------------------------
       8) Marcação de ingredientes
    ------------------------------------------ */
    const checkboxesIngredientes = document.querySelectorAll('.ingredientes input[type="checkbox"]');
    checkboxesIngredientes.forEach(function (cb) {
        cb.addEventListener('change', function () {
            const item = cb.closest('li');
            if (cb.checked) {
                item.style.transform = 'translateX(8px) scale(1.01)';
                setTimeout(function () {
                    item.style.transform = '';
                }, 200);
            }
        });
    });

    /* ------------------------------------------
       9) Marcação de passos com progresso + confetes
    ------------------------------------------ */
    const passosCheckboxes = document.querySelectorAll('.check-passo');
    const totalPassos = passosCheckboxes.length;
    const progressoPassos = document.getElementById('progresso-passos');
    let confetesDisparados = false;

    function atualizarProgresso() {
        const concluidos = document.querySelectorAll('.check-passo:checked').length;
        if (progressoPassos) {
            if (concluidos === totalPassos && totalPassos > 0) {
                progressoPassos.classList.add('completo');
                progressoPassos.textContent = '🎉 Receita completa! ' + totalPassos + ' de ' + totalPassos;
                if (!confetesDisparados) {
                    dispararConfetes();
                    mostrarToast('Parabéns! Receita finalizada! 🎂');
                    confetesDisparados = true;
                }
            } else {
                progressoPassos.classList.remove('completo');
                progressoPassos.textContent = concluidos + ' de ' + totalPassos + ' passos';
                confetesDisparados = false;
            }
        }
    }

    passosCheckboxes.forEach(function (cb) {
        cb.addEventListener('change', function () {
            const item = cb.closest('li');
            if (cb.checked) {
                item.classList.add('concluido');
            } else {
                item.classList.remove('concluido');
            }
            atualizarProgresso();
        });
    });

    /* ------------------------------------------
      Confetes
    ------------------------------------------ */
    const confetesContainer = document.getElementById('confetes');
    const coresConfete = ['#E76F51', '#F4A261', '#D4A574', '#2a9d8f', '#ffc940', '#5C3A21'];

    function dispararConfetes() {
        if (!confetesContainer) return;

        for (let i = 0; i < 80; i++) {
            const confete = document.createElement('div');
            confete.className = 'confete';
            confete.style.left = Math.random() * 100 + 'vw';
            confete.style.background = coresConfete[Math.floor(Math.random() * coresConfete.length)];
            confete.style.animationDelay = Math.random() * 0.5 + 's';
            confete.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confete.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
            confetesContainer.appendChild(confete);

            setTimeout(function () {
                confete.remove();
            }, 4000);
        }
    }

    /* ------------------------------------------
      10) Cronômetro do forno (40 min)
    ------------------------------------------ */
    const TEMPO_INICIAL = 40 * 60;
    let tempoRestante = TEMPO_INICIAL;
    let intervalo = null;
    let rodando = false;

    const minutosEl = document.getElementById('cronometro-minutos');
    const segundosEl = document.getElementById('cronometro-segundos');
    const separadorEl = document.querySelector('.cronometro-separador');
    const btnIniciar = document.getElementById('crono-iniciar');
    const btnPausar = document.getElementById('crono-pausar');
    const btnResetar = document.getElementById('crono-resetar');

    function atualizarDisplay() {
        if (!minutosEl || !segundosEl) return;
        const min = Math.floor(tempoRestante / 60);
        const seg = tempoRestante % 60;
        minutosEl.textContent = String(min).padStart(2, '0');
        segundosEl.textContent = String(seg).padStart(2, '0');
    }

    function iniciarCronometro() {
        if (rodando) return;
        rodando = true;
        if (separadorEl) separadorEl.classList.remove('parado');

        intervalo = setInterval(function () {
            if (tempoRestante > 0) {
                tempoRestante--;
                atualizarDisplay();
            } else {
                clearInterval(intervalo);
                rodando = false;
                if (separadorEl) separadorEl.classList.add('parado');
                mostrarToast('🔔 Tempo esgotado! Confira o bolo no forno!');
                alert('🔔 Tempo esgotado! Confira o bolo!');
            }
        }, 1000);
    }

    function pausarCronometro() {
        if (!rodando) return;
        rodando = false;
        clearInterval(intervalo);
        if (separadorEl) separadorEl.classList.add('parado');
    }

    function resetarCronometro() {
        pausarCronometro();
        tempoRestante = TEMPO_INICIAL;
        atualizarDisplay();
    }

    if (btnIniciar) btnIniciar.addEventListener('click', iniciarCronometro);
    if (btnPausar) btnPausar.addEventListener('click', pausarCronometro);
    if (btnResetar) btnResetar.addEventListener('click', resetarCronometro);

    if (separadorEl) separadorEl.classList.add('parado');

    /* ------------------------------------------
      11) Imprimir receita
    ------------------------------------------ */
    const botaoImprimir = document.getElementById('botao-imprimir');
    if (botaoImprimir) {
        botaoImprimir.addEventListener('click', function () {
            window.print();
        });
    }

    /* ------------------------------------------
      12) Compartilhar receita
    ------------------------------------------ */
    function compartilhar() {
        const dados = {
            title: 'O Melhor Bolo de Cenoura — por João Gabriel',
            text: 'Olha que receita incrível de bolo de cenoura com cobertura de chocolate!',
            url: window.location.href
        };

        if (navigator.share) {
            navigator.share(dados).catch(function () { /* cancelado */ });
        } else if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href)
                .then(function () {
                    mostrarToast('🔗 Link copiado para a área de transferência!');
                })
                .catch(function () {
                    mostrarToast('Não foi possível copiar o link.');
                });
        } else {
            mostrarToast('Compartilhamento não suportado neste navegador.');
        }
    }

    const botaoCompartilhar = document.getElementById('botao-compartilhar');
    if (botaoCompartilhar) botaoCompartilhar.addEventListener('click', compartilhar);

    const botaoCompartilharHero = document.getElementById('botao-compartilhar-hero');
    if (botaoCompartilharHero) botaoCompartilharHero.addEventListener('click', compartilhar);

    /* ------------------------------------------
      13) Lightbox da galeria
    ------------------------------------------ */
    const itensGaleria = document.querySelectorAll('.galeria-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-imagem');
    const lightboxFechar = document.getElementById('lightbox-fechar');

    function abrirLightbox(src) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightbox.classList.add('aberto');
        document.body.style.overflow = 'hidden';
    }

    function fecharLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('aberto');
        document.body.style.overflow = '';
    }

    itensGaleria.forEach(function (item) {
        item.addEventListener('click', function () {
            const src = item.dataset.imagem || item.querySelector('img').src;
            abrirLightbox(src);
        });
    });

    if (lightboxFechar) lightboxFechar.addEventListener('click', fecharLightbox);

    if (lightbox) {
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) fecharLightbox();
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('aberto')) {
            fecharLightbox();
        }
    });

    /* ------------------------------------------
      14) Avaliação por estrelas
    ------------------------------------------ */
    const estrelas = document.querySelectorAll('.estrela');
    const mensagemAvaliacao = document.getElementById('mensagem-avaliacao');
    const mensagensPorNota = {
        1: '😔 Que pena! Conta o que deu errado.',
        2: '🙂 Ok, mas pode melhorar.',
        3: '😊 Bom, gostamos da sua nota!',
        4: '😃 Ótimo! Que bom que gostou!',
        5: '🤩 Sensacional! Obrigado pela nota máxima!'
    };

    estrelas.forEach(function (estrela) {
        // Hover preview
        estrela.addEventListener('mouseenter', function () {
            const valor = parseInt(estrela.dataset.valor);
            estrelas.forEach(function (e, i) {
                if (i < valor) {
                    e.style.color = '#ffc940';
                } else {
                    e.style.color = '';
                }
            });
        });

        estrela.addEventListener('mouseleave', function () {
            estrelas.forEach(function (e) {
                if (!e.classList.contains('selecionada')) {
                    e.style.color = '';
                } else {
                    e.style.color = '#ffc940';
                }
            });
        });

        estrela.addEventListener('click', function () {
            const valor = parseInt(estrela.dataset.valor);

            estrelas.forEach(function (e, i) {
                if (i < valor) {
                    e.classList.add('selecionada');
                } else {
                    e.classList.remove('selecionada');
                }
            });

            if (mensagemAvaliacao) {
                mensagemAvaliacao.textContent = mensagensPorNota[valor];
            }

            mostrarToast('Obrigado pela avaliação de ' + valor + ' estrela' + (valor > 1 ? 's' : '') + '! ⭐');
        });
    });

    /* ------------------------------------------
      15) Formulário de newsletter
    ------------------------------------------ */
    const formNewsletter = document.getElementById('form-newsletter');
    const emailNewsletter = document.getElementById('email-newsletter');

    if (formNewsletter) {
        formNewsletter.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = emailNewsletter.value.trim();
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!regexEmail.test(email)) {
                mostrarToast('⚠️ Digite um e-mail válido.');
                emailNewsletter.focus();
                return;
            }

            mostrarToast('🎉 Inscrição confirmada! Em breve você receberá novidades.');
            emailNewsletter.value = '';
        });
    }

});
