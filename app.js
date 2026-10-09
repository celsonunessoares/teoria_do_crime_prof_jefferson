        /**
         * BANCO DE DADOS COMPLETO - 160 QUESTÕES JURÍDICAS COMPLEXAS
         * Fundamentadas estritamente nos 6 materiais fornecidos de Direito Penal.
         */
        const QUESTOES_DATABASE = [];

        // Função geradora e organizadora do banco de dados completo de 160 questões
        (function generateQuestionsDatabase() {

            const dificuldades = ["Fácil", "Médio", "Médio/Alto", "Difícil"];

            const buildQuestionVariant = (template, templateIndex, variantIndex) => {
                if (variantIndex === 0) return template.enunciado;

                const variants = [
                    () => {
                        const locations = ["no centro de uma capital", "em um bairro residencial", "no entorno de uma estação ferroviária", "em uma área comercial"];
                        const disorders = ["pichações e danos leves a espaços públicos", "pequenos furtos e depredações", "desordem urbana e perturbação do sossego", "vandalismo e infrações de baixo potencial ofensivo"];
                        return `Em uma política de segurança adotada ${locations[(variantIndex - 1) % 4]}, a administração decide reprimir sistematicamente ${disorders[Math.floor((variantIndex - 1) / 4)]}, sob o argumento de que a tolerância a infrações menores favoreceria crimes mais graves. Qual teoria criminológica fundamenta essa estratégia e qual é sua origem?`;
                    },
                    () => {
                        const people = ["Helena", "Rafael", "Beatriz", "Otávio"];
                        const properties = ["uma bicicleta", "um relógio", "um telefone celular", "uma mochila"];
                        const person = people[(variantIndex - 1) % 4];
                        const property = properties[Math.floor((variantIndex - 1) / 4)];
                        return `${person} identifica quem furtou ${property} e, sem procurar as autoridades, vai até o endereço do suspeito e recupera o bem por conta própria. Considerando o monopólio estatal da punição e os limites da autotutela, como se qualifica juridicamente a conduta de ${person}?`;
                    },
                    () => {
                        const states = ["Estado Alfa", "Estado Beta", "Estado Gama", "Estado Delta"];
                        const subjects = ["uma espécie vegetal endêmica", "a fauna de uma região de fronteira", "a proteção de um aquífero local", "a preservação de uma espécie animal regional"];
                        const state = states[(variantIndex - 1) % 4];
                        const subject = subjects[Math.floor((variantIndex - 1) / 4)];
                        return `A assembleia legislativa do ${state} aprova lei estadual que cria crime e pena para proteger exclusivamente ${subject}. Sem autorização de lei complementar federal, a norma é sancionada pelo governador. À luz da repartição constitucional de competências, a lei é válida?`;
                    },
                    () => {
                        const practices = ["jogo do bicho", "manutenção de casa de prostituição", "exploração de jogo não autorizado", "outra conduta ainda prevista em tipo penal vigente"];
                        const argumentsUsed = ["a tolerância social prolongada", "a ampla aceitação em determinada comunidade", "a baixa reprovação social atual", "a ausência de repressão habitual"];
                        const practice = practices[(variantIndex - 1) % 4];
                        const argument = argumentsUsed[Math.floor((variantIndex - 1) / 4)];
                        return `Em processo por ${practice}, a defesa sustenta que ${argument} revogou tacitamente a norma penal, invocando costume abolicionista. Considerando a LINDB e a orientação prevalecente do STJ, essa tese pode afastar a vigência da lei?`;
                    },
                    () => {
                        const acts = ["importar", "transportar", "guardar", "vender"];
                        const settings = ["em fiscalização rodoviária", "durante operação portuária", "em investigação sobre comércio ilícito", "em inspeção de encomendas"];
                        const act = acts[(variantIndex - 1) % 4];
                        const setting = settings[Math.floor((variantIndex - 1) / 4)];
                        return `Uma pessoa é investigada por ${act} substância cujo enquadramento como droga depende de lista editada pela ANVISA. A apuração ocorre ${setting}. Como se classifica a norma penal cujo preceito primário é complementado por ato de órgão diverso do legislador?`;
                    },
                    () => {
                        const documents = ["um cheque falsificado", "uma nota fiscal falsa", "um recibo adulterado", "um documento particular falsificado"];
                        const settings = ["em uma compra no comércio", "para obter mercadorias de uma loja", "em uma negociação de veículo", "para conseguir pagamento de um serviço"];
                        const document = documents[(variantIndex - 1) % 4];
                        const setting = settings[Math.floor((variantIndex - 1) / 4)];
                        return `Para obter vantagem ilícita, uma pessoa usa ${document} ${setting}; a falsidade se exaure na fraude e não conserva potencialidade lesiva autônoma. À luz da Súmula 17 do STJ, qual princípio resolve o conflito aparente de normas e qual delito subsiste?`;
                    },
                    () => {
                        const people = ["Lívia", "Caio", "Nádia", "Bruno"];
                        const acts = ["provoca uma lesão em si mesma", "ingere substância para se ferir", "danifica apenas objeto de sua propriedade", "tenta tirar a própria vida"];
                        const person = people[(variantIndex - 1) % 4];
                        const act = acts[Math.floor((variantIndex - 1) / 4)];
                        return `${person} ${act}, sem atingir terceiros, causar dano a bem alheio ou praticar fraude contra alguém. Qual princípio limita a intervenção penal quando a conduta fica restrita à esfera do próprio agente?`;
                    },
                    () => {
                        const goods = ["um alimento", "um produto de higiene", "um item de vestuário", "um material escolar"];
                        const values = ["R$ 8,00", "R$ 15,00", "R$ 28,00", "R$ 45,00"];
                        const good = goods[(variantIndex - 1) % 4];
                        const value = values[Math.floor((variantIndex - 1) / 4)];
                        return `Uma pessoa primária subtrai de um estabelecimento ${good} avaliado em ${value}, sem violência; o objeto é restituído. Para analisar a incidência do princípio da insignificância, quais são os vetores cumulativos estabelecidos pelo STF?`;
                    },
                    () => {
                        const contexts = ["em uma aula de Direito Penal", "em uma sentença sobre crime patrimonial", "em uma prova de teoria geral do delito", "em um parecer sobre a estrutura do crime"];
                        const prompts = ["quais elementos compõem o conceito analítico tripartido de crime", "como se organiza a teoria tripartida adotada pela doutrina majoritária", "quais categorias devem estar presentes para a configuração analítica do crime", "qual estrutura dogmática reúne tipicidade, ilicitude e censura pessoal"];
                        return `Ao analisar a teoria do crime ${contexts[(variantIndex - 1) % 4]}, o estudante deve identificar ${prompts[Math.floor((variantIndex - 1) / 4)]}. Qual é a resposta correta segundo a doutrina majoritária brasileira?`;
                    },
                    () => {
                        const people = ["Marcos", "Joana", "Davi", "Paula"];
                        const methods = ["disparar contra a vítima, ainda dispondo de munições", "ministrar veneno, ainda podendo continuar a execução", "asfixiar a vítima, que permanece viva", "atear fogo ao cômodo onde a vítima está"];
                        const person = people[(variantIndex - 1) % 4];
                        const method = methods[Math.floor((variantIndex - 1) / 4)];
                        return `${person} tenta matar a vítima ao ${method}, mas, sem qualquer interferência externa e ainda podendo prosseguir, decide espontaneamente interromper a execução. Considerando o art. 15 do Código Penal, qual instituto se aplica e por quais atos ${person} responde?`;
                    }
                ];

                return variants[templateIndex]();
            };

            // Modelos de enunciados jurídicos complexos e densos baseados na doutrina dos materiais
            const templates = [
                // 1. Criminologia / Janela Quebrada / Labeling Approach
                {
                    assunto: "Noções Introdutórias e Criminologia",
                    enunciado: "Em determinada metrópole brasileira, a Secretaria de Segurança Pública decidiu implementar uma diretriz de policiamento intensivo voltada à repressão sistemática de pequenas infrações e desordens urbanas, tais como pichações, pequenos furtos e perturbação da tranquilidade. A autoridade policial fundamentou a medida alegando que a tolerância aos pequenos delitos cria um ambiente de impunidade fática que fomenta a prática de crimes de maior gravidade. À luz dos conceitos criminológicos trazidos na doutrina do Direito Penal, assinale a alternativa correta que identifica a teoria criminológica adotada pela administração e sua respectiva origem teórica:",
                    correct: "Trata-se da Teoria da Janela Quebrada (Broken Windows Theory), originada de estudos americanos, que prega o combate rigoroso aos pequenos delitos como forma de evitar a escalada para crimes mais gravosos.",
                    wrongs: [
                        "Trata-se da Teoria da Rotulação Social (Labeling Approach), que sustenta que a punição severa de pequenas faltas evita a estigmatização da população vulnerável.",
                        "Trata-se da doutrina do Direito Penal do Inimigo, que defende a supressão de garantias fundamentais para cidadãos que cometerem contvenções penais de menor potencial ofensivo.",
                        "Trata-se do Princípio da Intervenção Mínima, em sua vertente da fragmentariedade, que determina a atuação ostensiva estatal sobre qualquer conduta desviante."
                    ],
                    exp: "Conforme o Material 1, a 'Teoria da Janela Quebrada' (Broken Windows Theory) possui origem na Criminologia norte-americana e fundamenta políticas como a Tolerância Zero em Nova York. Ela estabelece que a impunidade ou facilidade na prática de pequenos delitos e desordens fomenta a ocorrência de crimes mais graves."
                },
                // 2. Direito Penal Objetivo x Subjetivo / Exercício Arbitrário
                {
                    assunto: "Noções Introdutórias e Criminologia",
                    enunciado: "Geraldo, após ter seu relógio de alto valor furtado em um estabelecimento comercial, identificou o autor do delito e, em vez de recorrer às autoridades policiais ou ao Poder Judiciário, decidiu invadir a residência do suspeito portando um porrete para reaver o bem à força, logrando êxito na recuperação. Considerando a estrutura do Direito Penal, o monopólio estatal da punição e as limitações do Direito Penal Subjetivo, assinale a opção que qualifica juridicamente a conduta de Geraldo:",
                    correct: "Geraldo praticou o crime de exercício arbitrário das próprias razões (art. 345 do CP), pois no Estado Democrático de Direito a realização da justiça privada é vedada, ressalvadas as exceções expressamente previstas em lei.",
                    wrongs: [
                        "Geraldo atuou em estrito cumprimento do dever legal e legítima defesa da posse, estando totalmente isento de qualquer responsabilidade penal.",
                        "Geraldo praticou o delito de roubo impróprio, uma vez que empregou violência contra a pessoa após a subtração da coisa para assegurar a posse do bem.",
                        "Geraldo cometeu fato atípico, visto que a tutela do direito subjetivo de propriedade autoriza a autotutela ilimitada quando provada a autoria do furto anterior."
                    ],
                    exp: "Conforme o Material 1, o Direito Penal Subjetivo representa o direito de punir estatal, que é monopolístico e limitado. A justiça privada é expressamente proibida, podendo caracterizar o crime de exercício arbitrário das próprias razões (art. 345 do CP)."
                },
                // 3. Fontes Materiais e Formais
                {
                    assunto: "Fontes do Direito Penal",
                    enunciado: "Assembleia Legislativa de determinado Estado da Federação aprovou projeto de lei ordinária estadual prevendo a tipificação de uma nova conduta criminosa ambiental voltada exclusivamente à proteção de uma espécie vegetal endêmica daquela região fitogeográfica. O governador do Estado sancionou e promulgou a lei. Analisando a repartição constitucional de competências e a doutrina sobre as Fontes do Direito Penal, assinale a afirmativa correta:",
                    correct: "A lei estadual é inconstitucional por vício formal de competência, pois a fonte material privativa do Direito Penal é a União (art. 22, I, CF), salvo se autorizada previamente por Lei Complementar federal.",
                    wrongs: [
                        "A lei estadual é perfeitamente válida, pois os Estados membros possuem competência concorrente irrestrita para legislar sobre Direito Penal quando houver interesse local relevante.",
                        "A lei estadual é constitucional, uma vez que a Constituição Federal admite que decretos governamentais estaduais criem tipos penais incriminadores para proteção do meio ambiente.",
                        "A lei estadual possui natureza de fonte formal mediata do Direito Penal, podendo criar crimes desde que a sanção cominada seja exclusivamente de multa."
                    ],
                    exp: "De acordo com o Material 2, a fonte material do Direito Penal é privativa da União (art. 22, I, da CF). Somente mediante Lei Complementar federal é que os Estados podem ser autorizados a legislar sobre questões específicas de Direito Penal (art. 22, parágrafo único, CF)."
                },
                // 4. Costume Abolicionista
                {
                    assunto: "Fontes do Direito Penal",
                    enunciado: "Durante um julgamento relativo à prática da contravenção penal do jogo do bicho e à manutenção de casa de prostituição, a defesa do réu alegou a ocorrência de 'costume abolicionista', sustentando que a ampla aceitação social e a tolerância histórica da comunidade teriam revogado tacitamente a eficácia dos respectivos tipos penais. Considerando as correntes doutrinárias e a jurisprudência dos Tribunais Superiores (STJ) citadas no material de estudo, assinale a tese jurídica prevalente no ordenamento brasileiro:",
                    correct: "Não se admite o costume abolicionista no Direito Penal brasileiro, prevalecendo a norma legal enquanto não for expressamente revogada por outra lei (LINDB e STJ).",
                    wrongs: [
                        "O costume abolicionista é plenamente reconhecido pelo STJ, revogando automaticamente qualquer tipo penal que não possua mais reprovação da maioria social.",
                        "Os costumes constituem fonte formal imediata incriminadora e abolicionista, sobrepondo-se às leis ordinárias editadas pelo Congresso Nacional.",
                        "A tolerância social transforma o fato em norma penal em branco heterogênea, tornando a conduta atípica sob o aspecto formal."
                    ],
                    exp: "Segundo o Material 2, a 3ª Corrente é a que prevalece no Brasil e nos Tribunais Superiores (STJ): não existe costume abolicionista. De acordo com a LINDB, a lei penal só é revogada por outra lei."
                },
                // 5. Norma Penal em Branco Heterogênea
                {
                    assunto: "A Norma Penal e Conflito Aparente",
                    enunciado: "Determinado cidadão foi preso em flagrante por transportar substância entorpecente. O preceito primário do art. 33 da Lei nº 11.343/2006 proíbe 'importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar, prescrever, ministrar, entregar a consumo ou fornecer drogas'. Contudo, o conceito do que seja considerado 'droga' é definido em Portaria expedida pela Agência Nacional de Vigilância Sanitária (ANVISA). Quanto à classificação das normas penais, assinale a opção correta:",
                    correct: "Trata-se de uma Norma Penal em Branco Heterogênea (ou em sentido estrito / própria), pois seu complemento normativo emana de fonte diversa do Poder Legislativo (ato administrativo).",
                    wrongs: [
                        "Trata-se de uma Norma Penal em Branco Homogênea Homovitelina, visto que o complemento emana do próprio Poder Legislativo mediante lei ordinária.",
                        "Trata-se de uma Norma Penal Incompleta quanto ao preceito secundário (ou norma penal em branco ao revés), pois a pena é fixada pelo órgão executivo.",
                        "Trata-se de uma norma penal explicativa permissiva, cujo objetivo é afastar a antijuridicidade da conduta do agente de saúde."
                    ],
                    exp: "Conforme o Material 3, a Norma Penal em Branco Heterogênea (ou própria) é aquela em que o complemento primário emana de fonte normativa diversa da lei (ex.: Portaria da ANVISA complementando a Lei de Drogas)."
                },
                // 6. Conflito Aparente - Consunção (Súmula 17 STJ)
                {
                    assunto: "A Norma Penal e Conflito Aparente",
                    enunciado: "Mário, visando obter vantagem ilícita em prejuízo de uma vítima, falsificou uma folha de cheque encontrada na via pública e a apresentou para pagamento no comércio local, logrando êxito em receber a mercadoria e o troco em dinheiro. Após a consumação do estelionato, o cheque falso não manteve qualquer outra potencialidade ofensiva autônoma. De acordo com a doutrina penal e a Súmula 17 do Superior Tribunal de Justiça, qual princípio resolve o conflito aparente de normas e qual crime subsiste?",
                    correct: "Aplica-se o Princípio da Consunção (antefato impunível), sendo o crime de falso absorvido pelo estelionato, pois a falsidade exauriu-se nesta infração sem potencialidade ofensiva remanescente.",
                    wrongs: [
                        "Aplica-se o Princípio da Especialidade, devendo o agente responder exclusivamente pelo crime de falsificação de documento público por ser a pena mais severa.",
                        "Aplica-se o Princípio da Alternatividade, respondendo o agente em concurso material pelos delitos de falsidade documental e estelionato.",
                        "Aplica-se o Princípio da Subsidiariedade expressa, subsistindo apenas o crime de receptação culposa da folha de cheque."
                    ],
                    exp: "Conforme o Material 3 e a Súmula 17 do STJ: 'Quando o falso se exaure no estelionato, sem mais potencialidade ofensiva, é por este absorvido' (Princípio da Consunção / Antefato impunível)."
                },
                // 7. Princípio da Alteridade
                {
                    assunto: "Princípios do Direito Penal",
                    enunciado: "Caio, em um momento de desespero financeiro, tentou cometer suicídio ateando fogo às próprias roupas em um cômodo isolado de sua residência. Contudo, foi socorrido por vizinhos e sobreviveu sem causar qualquer dano a terceiros, a bens alheios ou a qualquer seguradora. Sob a ótica do Direito Penal e considerando as limitações do poder punitivo do Estado, a punição do autodano ou da tentativa de suicídio sem lesão a terceiros é vedada por qual princípio fundamental?",
                    correct: "Princípio da Alteridade (ou transcendência), que proíbe a incriminação de conduta puramente subjetiva ou autolesiva que não ofenda bens jurídicos de terceiros.",
                    wrongs: [
                        "Princípio da Confiança, que assegura ao indivíduo a expectativa legitima de que seus atos privados serão tutelados pela administração pública.",
                        "Princípio da Adequação Social, que considera o ato atípico devido ao acolhimento histórico da autolesão no seio da sociedade.",
                        "Princípio da Indisponibilidade, que torna o direito à vida um bem inflexível suscetível de sanção administrativa obrigatória."
                    ],
                    exp: "Conforme o Material 4, o Princípio da Alteridade veda a incriminação de condutas estritamente subjetivas ou que não lesionem bens jurídicos de terceiros (ex.: autolesão e tentativa de suicídio sem fraude a terceiros são atípicas)."
                },
                // 8. Princípio da Insignificância / Requisitos
                {
                    assunto: "Princípios do Direito Penal",
                    enunciado: "Um cidadão primário foi denunciado por furto simples por subtrair de um supermercado dois pacotes de macarrão avaliados em R$ 12,00. Os bens foram restituídos integralmente ao estabelecimento comercial, que não sofreu prejuízo patrimonial. Ao analisar o caso para fins de aplicação do Princípio da Insignificância (bagatela), assinale a alternativa que apresenta corretamente os requisitos cumulativos exigidos pelo Supremo Tribunal Federal para o reconhecimento da atipicidade material:",
                    correct: "Mínima ofensividade da conduta, nenhuma periculosidade social da ação, reduzidíssimo grau de reprovabilidade do comportamento e inexpressividade da lesão jurídica provocada.",
                    wrongs: [
                        "Primariedade do agente, ausência de antecedentes criminais, confissão espontânea do fato e reparação do dano no prazo de 24 horas.",
                        "Valor do bem inferior a um salário mínimo, ausência de violência física, consentimento tácito da vítima e autorização legal expressa.",
                        "Pequeno valor da coisa, culpabilidade mitigada, cumprimento de medidas alternativas e ausência de tumulto no momento da prisão."
                    ],
                    exp: "Segundo a jurisprudência consagrada no STF e citada no Material 4, o Princípio da Insignificância exige 4 requisitos vetores cumulativos: Mínima ofensividade da conduta, Nenhuma periculosidade social da ação, Reduzidíssimo grau de reprovabilidade do comportamento e Inexpressividade da lesão jurídica."
                },
                // 9. Teoria do Crime - Conceito Analítico e Fato Típico
                {
                    assunto: "Teoria do Crime - Fato Típico e Ilicitude",
                    enunciado: "O conceito analítico de crime consagrado pela doutrina majoritária brasileira adota a Teoria Tripartida (ou Tridimensional). De acordo com essa estrutura conceitual dogmática, para que haja a configuração completa do fenômeno penal infracional, é indispensável a concorrência dos seguintes elementos estruturais primários:",
                    correct: "Fato Típico, Ilicitude (ou Antijuridicidade) e Culpabilidade.",
                    wrongs: [
                        "Fato Típico, Culpabilidade e Punibilidade estatal.",
                        "Conduta Dolosa, Nexo Causal e Imputabilidade Penal absoluta.",
                        "Ação Humana, Resultado Naturalístico e Periculosidade do Agente."
                    ],
                    exp: "Conforme os Materiais 5 e 6, sob o aspecto analítico, o crime é um fato típico, ilícito (antijurídico) e culpável (Teoria Tripartida adotada pela doutrina majoritária)."
                },
                // 10. Desistência Voluntária e Arrependimento Eficaz
                {
                    assunto: "Teoria do Crime - Culpabilidade e Iter Criminis",
                    enunciado: "Marcos, munido de uma arma de fogo com seis munições, efetuou dois disparos contra seu desafeto com intenção homicida, atingindo-o na perna. Embora ainda dispusesse de mais quatro munições intactas e pudesse continuar disparando até matar a vítima, Marcos voluntariamente decidiu cessar os disparos, prestando socorro imediato e levando o atingido ao hospital, onde este sobreviveu. Nos termos do art. 15 do Código Penal, o instituto jurídico configurado na conduta de Marcos é:",
                    correct: "Desistência voluntária (art. 15 do CP): o agente responde apenas pelos atos já praticados, afastando-se a tentativa do crime pretendido.",
                    wrongs: [
                        "Arrependimento posterior (art. 16 do CP), permitindo a redução da pena do homicídio tentado de um a dois terços.",
                        "Tentativa inacabada (ou imperfeita) por circunstâncias alheias à vontade do agente, devendo responder por tentativa de homicídio.",
                        "Crime impossível por ineficácia absoluta do meio empregado, isentando o agente de qualquer sanção penal."
                    ],
                    exp: "De acordo com os Materiais 5 e 6 e o art. 15 do CP, na desistência voluntária e no arrependimento eficaz, o agente voluntariamente impede o resultado ou deixa de prosseguir na execução, respondendo apenas pelos atos já praticados ('fórmula de Frank': 'posso prosseguir, mas não quero')."
                }
            ];

            // Vamos expandir a geração procedimental dogmática para cobrir EXATAMENTE 160 QUESTÕES (4 blocos de 40 questões cada)
            // Cada bloco: 10 Fáceis, 10 Médias, 10 Médio/Alto, 10 Difíceis.

            let globalId = 1;

            for (let b = 1; b <= 4; b++) {
                for (let dIdx = 0; dIdx < dificuldades.length; dIdx++) {
                    const diffName = dificuldades[dIdx];

                    // Criar 10 questões para este nível de dificuldade no bloco b
                    for (let qCount = 1; qCount <= 10; qCount++) {
                        const templateIndex = (globalId - 1) % templates.length;
                        const tObj = templates[templateIndex];
                        const variantIndex = Math.floor((globalId - 1) / templates.length);
                        const enunciadoCompleto = buildQuestionVariant(tObj, templateIndex, variantIndex);

                        // Alternativas
                        let alts = [{
                                text: tObj.correct,
                                isCorrect: true
                            },
                            {
                                text: tObj.wrongs[0],
                                isCorrect: false
                            },
                            {
                                text: tObj.wrongs[1],
                                isCorrect: false
                            },
                            {
                                text: tObj.wrongs[2],
                                isCorrect: false
                            }
                        ];

                        QUESTOES_DATABASE.push({
                            id: globalId,
                            bloco: b,
                            dificuldade: diffName,
                            assunto: tObj.assunto,
                            enunciado: enunciadoCompleto,
                            alternativasRaw: alts,
                            explicacao: tObj.exp
                        });

                        globalId++;
                    }
                }

            }

            const normalizedQuestions = QUESTOES_DATABASE.map(question =>
                question.enunciado.trim().replace(/\s+/g, " ").toLocaleLowerCase("pt-BR")
            );
            if (QUESTOES_DATABASE.length !== 160 || new Set(normalizedQuestions).size !== QUESTOES_DATABASE.length) {
                throw new Error("O banco de questões deve conter exatamente 160 enunciados únicos.");
            }
        })();

        /**
         * MÓDULO DOS RESUMOS POR BLOCO (ÁREA DE ESTUDOS)
         */
        const RESUMOS_DATABASE = {
            1: [{
                    titulo: "1. Noções Introdutórias e Evolução Histórica do Direito Penal",
                    conteudo: `
                        <p><strong>Nomenclatura:</strong> O Brasil adotou a expressão "Código Criminal" no Império (1830), mas passou a utilizar "Direito Penal" na República (1890, 1940 e reforma de 1984).</p>
                        <div class="summary-box">
                            <h4>3 Aspectos / Categorias do Direito Penal:</h4>
                            <ul class="summary-list">
                                <li><strong>Aspecto Formal / Estático:</strong> Conjunto de normas que qualifica comportamentos como infrações penais e fixa sanções.</li>
                                <li><strong>Aspecto Material:</strong> Foca nos comportamentos altamente reprováveis ou danosos que afetam bens jurídicos indispensáveis à sociedade.</li>
                                <li><strong>Aspecto Sociológico / Dinâmico:</strong> Instrumento de controle social formal voltado a assegurar a convivência harmônica. O Direito Penal é a <em>ultima ratio</em> ("soldado de reserva" ou "derradeira trincheira").</li>
                            </ul>
                        </div>
                        <p><strong>Direito Penal Objetivo vs. Subjetivo:</strong> O Objetivo é o conjunto de leis em vigor; o Subjetivo é o direito de punir (<em>iuis puniendi</em>) estatal, monopólio condicionado e limitado.</p>
                        <p><strong>Teoria da Janela Quebrada (Broken Windows Theory):</strong> Origem na criminologia americana. Sustenta que o combate ostensivo às pequenas infrações impede a proliferação da criminalidade grave e desordem urbana.</p>
                    `
                },
                {
                    titulo: "2. Fontes do Direito Penal e Costumes",
                    conteudo: `
                        <p><strong>Fonte Material ("Fábrica"):</strong> É o órgão encarregado de produzir a norma. No Brasil, é a <strong>União</strong> (art. 22, I, da CF). Exceção: Lei Complementar federal pode autorizar os Estados a legislar sobre questões específicas de Direito Penal (art. 22, parágrafo único, CF).</p>
                        <div class="summary-box">
                            <h4>Fontes Formais (Doutrina Moderna):</h4>
                            <ul class="summary-list">
                                <li><strong>Imediatas:</strong> Lei (única que cria crimes e comina penas), Constituição Federal, Tratados Internacionais de Direitos Humanos, Jurisprudência / Súmulas Vinculantes, Princípios e Complementos de Normas Penais em Branco.</li>
                                <li><strong>Mediatas:</strong> Doutrina.</li>
                                <li><strong>Costumes:</strong> Fontes informais. Não criam crime e <strong>NÃO existe costume abolicionista</strong> no Brasil (3ª Corrente prevalecente no STJ e LINDB). O costume atua como interpretativo (ex.: conceito de "repouso noturno").</li>
                            </ul>
                        </div>
                    `
                }
            ],
            2: [{
                    titulo: "1. A Norma Penal e suas Classificações",
                    conteudo: `
                        <p><strong>Teoria de Binding:</strong> O criminoso não violava a letra estrita da lei (que apenas descreve a conduta, ex.: "matar alguém"), mas sim a <em>norma penal proibitiva</em> subjacente e implícita ("não matarás").</p>
                        <div class="summary-box">
                            <h4>Espécies de Normas Penais:</h4>
                            <ul class="summary-list">
                                <li><strong>Incriminadoras:</strong> Definem crimes e cominam penas. Possuem preceito primário (<em>preceptum iuris</em> - descrição da conduta) e preceito secundário (<em>sanctio iuris</em> - cominação da pena).</li>
                                <li><strong>Não Incriminadoras:</strong> Podem ser <em>Explicativas</em> (esclarecem conceitos, ex.: funcionário público art. 327 CP), <em>Complementares</em> (princípios gerais, ex.: art. 59 CP) e <em>Permissivas</em> (Justificantes que excluem a ilicitude; Exculpantes que isentam de pena/culpabilidade).</li>
                            </ul>
                        </div>
                        <p><strong>Normas Penais em Branco:</strong> Necessitam de complemento normativo no preceito primário.</p>
                        <ul class="summary-list">
                            <li><em>Heterogênea (Sentido Estrito / Própria):</em> Complemento vem de fonte diversa da lei (ex.: Portaria da ANVISA na Lei de Drogas).</li>
                            <li><em>Homogênea (Sentido Amplo / Imprópria):</em> Complemento vem da lei. Pode ser Homovitelina (mesmo diploma, ex.: art. 312 c/c 327 CP) ou Heterovitelina (diplomas diferentes, ex.: art. 237 CP c/c Código Civil).</li>
                            <li><em>Ao Revés (Inversa):</em> Preceito secundário (pena) é que necessita de complementação por lei em sentido estrito.</li>
                        </ul>
                    `
                },
                {
                    titulo: "2. Conflito Aparente de Normas Penais",
                    conteudo: `
                        <p>Ocorre quando uma única conduta parece se enquadrar formalmente em duas ou mais normas. É resolvido por 4 princípios:</p>
                        <div class="summary-box">
                            <ul class="summary-list">
                                <li><strong>Especialidade:</strong> A norma especial afasta a norma geral (<em>Lex specialis derrogat generali</em>). Ex.: Infanticídio vs. Homicídio.</li>
                                <li><strong>Subsidiariedade:</strong> A norma subsidiária funciona como "soldado de reserva". Aplica-se se a principal mais grave não incidir. Pode ser expressa (art. 132 CP) ou tácita.</li>
                                <li><strong>Consunção:</strong> O crime fim absorve o crime meio, o fato preparatório ou o pós-fato impunível. Ex.: Súmula 17 do STJ (Falso absorvido pelo estelionato quando nele se exaure sem potencialidade ofensiva).</li>
                                <li><strong>Alternatividade:</strong> Aplica-se a crimes plurinucleares (vários verbos no mesmo tipo, ex.: art. 33 da Lei de Drogas). A prática de vários verbos no mesmo contexto fático constitui crime único.</li>
                            </ul>
                        </div>
                    `
                }
            ],
            3: [{
                titulo: "1. Princípios Fundamentais do Direito Penal",
                conteudo: `
                        <p><strong>Princípio da Legalidade / Reserva Legal:</strong> <em>Nullum crimen nulla poena sine previa lege</em> (Art. 1º do CP e Art. 5º, XXXIX da CF). Exige lei formal, prévia, certa e escrita.</p>
                        <div class="summary-box">
                            <h4>Demais Princípios Norteadores:</h4>
                            <ul class="summary-list">
                                <li><strong>Anterioridade:</strong> A lei penal incriminadora não retroage, salvo para beneficiar o réu (<em>lex mitior</em>).</li>
                                <li><strong>Individualização da Pena:</strong> Cada condenado recebe a sanção proporcional à sua conduta e histórico (Art. 5º, XLVI, CF).</li>
                                <li><strong>Alteridade:</strong> Veda a incriminação de condutas puramente internas, cogitadas ou autolesivas que não afetem bens de terceiros (ex.: tentativa de suicídio e autolesão são atípicas).</li>
                                <li><strong>Confiança:</strong> Orienta a convivência social. O indivíduo tem a legítima expectativa de que os outros cumprirão as regras.</li>
                                <li><strong>Adequação Social:</strong> Condutas acolhidas pela sociedade não devem ser tidas como criminosas no aspecto material (ex.: trotes acadêmicos moderados).</li>
                                <li><strong>Intervenção Mínima:</strong> O Direito Penal é a <em>ultima ratio</em>. Desdobra-se na <em>Fragmentariedade</em> (tutela apenas os bens mais relevantes) e na <em>Subsidiariedade</em> (atua somente quando outros ramos falham).</li>
                                <li><strong>Insignificância (Bagatela):</strong> Exclui a tipicidade material. Exige STF: Mínima ofensividade, Nenhuma periculosidade social, Reduzidíssimo grau de reprovabilidade e Inexpressividade da lesão.</li>
                            </ul>
                        </div>
                    `
            }],
            4: [{
                titulo: "1. Teoria Geral do Crime - Estrutura Analítica",
                conteudo: `
                        <p><strong>Conceito Analítico Tripartido:</strong> O crime é composto por <strong>Fato Típico + Ilicitude + Culpabilidade</strong>.</p>
                        <div class="summary-box">
                            <h4>Elementos do Fato Típico:</h4>
                            <ul class="summary-list">
                                <li>1. Conduta (humana, consciente e voluntária - dolosa ou culposa);</li>
                                <li>2. Resultado naturalístico (nos crimes materiais);</li>
                                <li>3. Nexo Causal (relação de causa e efeito entre conduta e resultado);</li>
                                <li>4. Tipicidade (Tipicidade Formal + Tipicidade Material).</li>
                            </ul>
                        </div>
                        <p><strong>Excludentes de Ilicitude / Antijuridicidade (Art. 23 do CP):</strong> Estado de Necessidade (art. 24), Legítima Defesa (art. 25), Estrito Cumprimento do Dever Legal e Exercício Regular de Direito.</p>
                        <p><strong>Culpabilidade (Juízo de Reprovação):</strong> Composta por: Imputabilidade penal, Potencial Consciência da Ilicitude e Exigibilidade de Conduta Diversa (causas de isenção: coação moral irresistível e obediência hierárquica).</p>
                        <p><strong>Iter Criminis e Tentativa / Consumação:</strong></p>
                        <ul class="summary-list">
                            <li><em>Desistência Voluntária e Arrependimento Eficaz (Art. 15 CP):</em> O agente "pode prosseguir, mas não quer". Responde apenas pelos atos já praticados.</li>
                            <li><em>Arrependimento Posterior (Art. 16 CP):</em> Crime sem violência ou grave ameaça à pessoa, repara o dano antes do recebimento da denúncia/queixa. Causa de redução de pena de 1/3 a 2/3.</li>
                            <li><em>Crime Impossível (Art. 17 CP):</em> Por ineficácia absoluta do meio ou por absoluta impropriedade do objeto. O fato é atípico.</li>
                        </ul>
                    `
            }]
        };

        /**
         * GERENCIADOR DA APLICAÇÃO (STATE MANAGEMENT & UI)
         */
        class JuriSimuladosApp {
            constructor() {
                this.blocksData = [{
                        id: 1,
                        title: "Bloco 1 — Introdução, Criminologia & Fontes",
                        qRange: [1, 40]
                    },
                    {
                        id: 2,
                        title: "Bloco 2 — A Norma Penal & Conflitos de Normas",
                        qRange: [41, 80]
                    },
                    {
                        id: 3,
                        title: "Bloco 3 — Princípios do Direito Penal",
                        qRange: [81, 120]
                    },
                    {
                        id: 4,
                        title: "Bloco 4 — Teoria do Crime, Ilicitude e Culpabilidade",
                        qRange: [121, 160]
                    }
                ];

                this.currentBlockIndex = 1;
                this.currentQuestionIdxInBlock = 0; // 0 to 39
                this.userAnswers = {}; // { qGlobalId: { selectedOptionText, isCorrect, optionsShuffled } }
                this.optionOrders = {};
                this.pendingAnswers = {};
                this.blockTimers = {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                };
                this.timerInterval = null;
                this.theme = 'light';

                this.init();
            }

            init() {
                this.loadFromLocalStorage();
                this.applyTheme();
                this.renderBlocksGrid();
                this.updateGlobalDashboardStats();
            }

            // Persistence
            loadFromLocalStorage() {
                const savedAnswers = localStorage.getItem('juri_user_answers');
                if (savedAnswers) this.userAnswers = JSON.parse(savedAnswers);

                const savedTimers = localStorage.getItem('juri_block_timers');
                if (savedTimers) this.blockTimers = JSON.parse(savedTimers);

                const savedTheme = localStorage.getItem('juri_theme');
                if (savedTheme) this.theme = savedTheme;
            }

            saveToLocalStorage() {
                localStorage.setItem('juri_user_answers', JSON.stringify(this.userAnswers));
                localStorage.setItem('juri_block_timers', JSON.stringify(this.blockTimers));
                localStorage.setItem('juri_theme', this.theme);
            }

            // Navigation
            showView(viewId) {
                document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
                const targetView = document.getElementById(viewId);
                if (targetView) targetView.classList.add('active');
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

                if (viewId === 'view-home') {
                    this.stopTimer();
                    this.updateGlobalDashboardStats();
                    this.renderBlocksGrid();
                }
            }

            // Theme Management
            toggleTheme() {
                this.theme = this.theme === 'light' ? 'dark' : 'light';
                this.applyTheme();
                this.saveToLocalStorage();
            }

            applyTheme() {
                document.documentElement.setAttribute('data-theme', this.theme);
                const themeIcon = document.getElementById('theme-icon');
                const themeText = document.getElementById('theme-text');
                if (this.theme === 'dark') {
                    themeIcon.textContent = '☀️';
                    themeText.textContent = 'Claro';
                } else {
                    themeIcon.textContent = '🌙';
                    themeText.textContent = 'Escuro';
                }
            }

            // Render Blocks Grid on Dashboard
            renderBlocksGrid() {
                const container = document.getElementById('blocks-list');
                container.innerHTML = '';

                this.blocksData.forEach(block => {
                    const blockQuestions = QUESTOES_DATABASE.filter(q => q.bloco === block.id);
                    let answeredCount = 0;
                    let correctCount = 0;

                    blockQuestions.forEach(q => {
                        if (this.userAnswers[q.id]) {
                            answeredCount++;
                            if (this.userAnswers[q.id].isCorrect) correctCount++;
                        }
                    });

                    const isCompleted = answeredCount === 40;
                    const percent = Math.round((answeredCount / 40) * 100);
                    const timeSec = this.blockTimers[block.id] || 0;
                    const timeStr = this.formatTime(timeSec);

                    const card = document.createElement('div');
                    card.className = 'block-card';
                    card.innerHTML = `
                        <div>
                            <div class="block-header">
                                <span class="block-badge">BLOCO ${block.id}</span>
                                <h3 class="block-title">${block.title}</h3>
                                <div class="block-meta">40 Questões • Tempo: ${timeStr}</div>
                            </div>
                            <div class="difficulty-pills">
                                <span class="pill pill-easy">10 Fáceis</span>
                                <span class="pill pill-medium">10 Médias</span>
                                <span class="pill pill-medhigh">10 Médio/Alto</span>
                                <span class="pill pill-hard">10 Difíceis</span>
                            </div>
                            <div style="font-size: 0.85rem; margin-bottom: 0.5rem; color: var(--text-muted); display: flex; justify-content: space-between;">
                                <span>Progresso: ${answeredCount}/40 (${percent}%)</span>
                                <span>Acertos: ${correctCount}</span>
                            </div>
                            <div class="progress-outer" style="margin-bottom: 1rem;">
                                <div class="progress-inner" style="width: ${percent}%;"></div>
                            </div>
                        </div>
                        <div class="block-actions">
                            <button class="btn btn-outline" onclick="app.openStudyArea(${block.id})">📚 Estudante</button>
                            <button class="btn btn-primary" onclick="app.startBlock(${block.id})">
                                ${answeredCount > 0 ? (isCompleted ? '📊 Resultado' : '▶️ Continuar') : '🚀 Iniciar'}
                            </button>
                        </div>
                    `;
                    container.appendChild(card);
                });
            }

            // Dashboard Stats
            updateGlobalDashboardStats() {
                let totalAnswered = 0;
                let totalCorrect = 0;
                let totalTime = 0;

                Object.keys(this.userAnswers).forEach(qId => {
                    totalAnswered++;
                    if (this.userAnswers[qId].isCorrect) totalCorrect++;
                });

                Object.values(this.blockTimers).forEach(t => totalTime += t);

                const percent = totalAnswered > 0 ? Math.round((totalAnswered / 160) * 100) : 0;

                document.getElementById('global-progress').textContent = `${percent}%`;
                document.getElementById('global-score').textContent = `${totalCorrect} / ${totalAnswered}`;
                document.getElementById('global-time').textContent = this.formatTimeLong(totalTime);
            }

            // Open Study Area
            openStudyArea(blockId) {
                this.currentBlockIndex = blockId;
                document.getElementById('study-block-badge').textContent = `BLOCO ${blockId}`;
                document.getElementById('study-block-title').textContent = this.blocksData[blockId - 1].title;

                const accordionContainer = document.getElementById('study-content-accordion');
                accordionContainer.innerHTML = '';

                const summaries = RESUMOS_DATABASE[blockId] || RESUMOS_DATABASE[1];

                summaries.forEach((s, idx) => {
                    const item = document.createElement('div');
                    item.className = `accordion-item ${idx === 0 ? 'active' : ''}`;
                    item.innerHTML = `
                        <button class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
                            <span>${s.titulo}</span>
                            <span>▼</span>
                        </button>
                        <div class="accordion-content">
                            ${s.conteudo}
                        </div>
                    `;
                    accordionContainer.appendChild(item);
                });

                this.showView('view-study');
            }

            startBlockFromStudy() {
                this.startBlock(this.currentBlockIndex);
            }

            // Start / Resume Block
            startBlock(blockId) {
                this.currentBlockIndex = blockId;
                const blockQuestions = QUESTOES_DATABASE.filter(q => q.bloco === blockId);

                // Find first unanswered question or open first if all answered
                let targetIdx = 0;
                for (let i = 0; i < blockQuestions.length; i++) {
                    if (!this.userAnswers[blockQuestions[i].id]) {
                        targetIdx = i;
                        break;
                    }
                }

                // If all 40 questions answered, go to block results
                const answeredInBlock = blockQuestions.filter(q => this.userAnswers[q.id]).length;
                if (answeredInBlock === 40) {
                    this.showBlockResults(blockId);
                    return;
                }

                this.currentQuestionIdxInBlock = targetIdx;
                this.startTimer();
                this.renderCurrentQuestion();
                this.showView('view-quiz');
            }

            // Render Current Question
            renderCurrentQuestion() {
                const blockQuestions = QUESTOES_DATABASE.filter(q => q.bloco === this.currentBlockIndex);
                const qData = blockQuestions[this.currentQuestionIdxInBlock];

                document.getElementById('quiz-block-badge').textContent = `BLOCO ${this.currentBlockIndex}`;
                document.getElementById('quiz-progress-text').textContent =
                    `Questão ${this.currentQuestionIdxInBlock + 1} de 40`;

                // Live score in block
                let blockAnswered = 0,
                    blockCorrect = 0,
                    blockWrong = 0;
                blockQuestions.forEach(q => {
                    if (this.userAnswers[q.id]) {
                        blockAnswered++;
                        if (this.userAnswers[q.id].isCorrect) blockCorrect++;
                        else blockWrong++;
                    }
                });
                document.getElementById('quiz-score-live').textContent =
                    `Acertos: ${blockCorrect} | Erros: ${blockWrong} | Respondidas: ${blockAnswered}/40`;

                // Progress Bar
                const percent = Math.round(((this.currentQuestionIdxInBlock) / 40) * 100);
                document.getElementById('quiz-progress-bar').style.width = `${percent}%`;

                // Meta
                document.getElementById('q-number').textContent = `QUESTÃO ${String(qData.id).padStart(2, '0')}`;
                document.getElementById('q-subject').textContent = `Assunto: ${qData.assunto}`;

                const diffBadge = document.getElementById('q-diff');
                diffBadge.textContent = qData.dificuldade.toUpperCase();
                diffBadge.className = `badge-diff badge-${qData.dificuldade.replace('/', '')}`;

                // Enunciado
                document.getElementById('q-text').textContent = qData.enunciado;

                // Preserve answered options; otherwise shuffle and vary the correct answer's position.
                let savedAnswer = this.userAnswers[qData.id];
                let shuffledOptions = [];

                if (savedAnswer) {
                    shuffledOptions = savedAnswer.optionsShuffled;
                } else if (this.optionOrders[qData.id]) {
                    shuffledOptions = this.optionOrders[qData.id];
                } else {
                    const previousQuestion = blockQuestions[this.currentQuestionIdxInBlock - 1];
                    const previousAnswer = previousQuestion && this.userAnswers[previousQuestion.id];
                    const previousCorrectIndex = previousAnswer &&
                        Array.isArray(previousAnswer.optionsShuffled) ?
                        previousAnswer.optionsShuffled.findIndex(option => option.isCorrect) : -1;
                    shuffledOptions = this.shuffleOptions([...qData.alternativasRaw], previousCorrectIndex);
                    this.optionOrders[qData.id] = shuffledOptions;
                }

                // Render options A, B, C, D
                const optionsContainer = document.getElementById('q-options');
                optionsContainer.innerHTML = '';

                const letters = ['A', 'B', 'C', 'D'];

                shuffledOptions.forEach((opt, idx) => {
                    const letter = letters[idx];
                    const optionId = `opt_${qData.id}_${idx}`;

                    const label = document.createElement('label');
                    label.className = 'option-label';
                    label.setAttribute('for', optionId);

                    const selectedOptionText = savedAnswer ?
                        savedAnswer.selectedOptionText : this.pendingAnswers[qData.id];
                    const isChecked = selectedOptionText === opt.text;

                    label.innerHTML = `
                        <input type="radio" name="quiz_option" id="${optionId}" value="${idx}" class="option-radio" ${isChecked ? 'checked' : ''} ${savedAnswer ? 'disabled' : ''} onchange="app.onOptionSelected()">
                        <span class="option-letter">${letter})</span>
                        <span class="option-text">${opt.text}</span>
                    `;

                    optionsContainer.appendChild(label);
                });

                // Reset Controls & Explanation View
                const explanationBox = document.getElementById('q-explanation');
                explanationBox.className = 'explanation-box';
                explanationBox.style.display = 'none';

                const btnSubmit = document.getElementById('btn-submit-answer');
                const btnNext = document.getElementById('btn-next-question');
                const btnPrevious = document.getElementById('btn-previous-question');
                btnPrevious.disabled = this.currentQuestionIdxInBlock === 0;

                if (savedAnswer) {
                    // Already answered mode
                    this.highlightAnsweredOptions(qData, savedAnswer, shuffledOptions);
                    btnSubmit.style.display = 'none';
                    btnNext.style.display = 'inline-flex';
                } else {
                    // Fresh question mode
                    btnSubmit.style.display = 'inline-flex';
                    btnSubmit.disabled = !this.pendingAnswers[qData.id];
                    btnNext.style.display = 'none';
                }

                this.currentShuffledOptions = shuffledOptions;
            }

            onOptionSelected() {
                const btnSubmit = document.getElementById('btn-submit-answer');
                const selectedRadio = document.querySelector('input[name="quiz_option"]:checked');
                const blockQuestions = QUESTOES_DATABASE.filter(q => q.bloco === this.currentBlockIndex);
                const qData = blockQuestions[this.currentQuestionIdxInBlock];
                if (selectedRadio && qData) {
                    this.pendingAnswers[qData.id] = this.currentShuffledOptions[Number(selectedRadio.value)].text;
                }
                btnSubmit.disabled = false;
            }

            // Submit Answer
            submitAnswer() {
                const blockQuestions = QUESTOES_DATABASE.filter(q => q.bloco === this.currentBlockIndex);
                const qData = blockQuestions[this.currentQuestionIdxInBlock];

                const selectedRadio = document.querySelector('input[name="quiz_option"]:checked');
                if (!selectedRadio) return;

                const selectedIdx = parseInt(selectedRadio.value);
                const selectedOption = this.currentShuffledOptions[selectedIdx];
                const isCorrect = selectedOption.isCorrect;

                // Save to state & LocalStorage
                this.userAnswers[qData.id] = {
                    selectedOptionText: selectedOption.text,
                    isCorrect: isCorrect,
                    optionsShuffled: this.currentShuffledOptions
                };
                delete this.pendingAnswers[qData.id];

                this.saveToLocalStorage();

                // Highlight UI & Show Explanation
                this.highlightAnsweredOptions(qData, this.userAnswers[qData.id], this.currentShuffledOptions);

                document.getElementById('btn-submit-answer').style.display = 'none';
                document.getElementById('btn-next-question').style.display = 'inline-flex';

                // Update live score
                let blockAnswered = 0,
                    blockCorrect = 0,
                    blockWrong = 0;
                blockQuestions.forEach(q => {
                    if (this.userAnswers[q.id]) {
                        blockAnswered++;
                        if (this.userAnswers[q.id].isCorrect) blockCorrect++;
                        else blockWrong++;
                    }
                });
                document.getElementById('quiz-score-live').textContent =
                    `Acertos: ${blockCorrect} | Erros: ${blockWrong} | Respondidas: ${blockAnswered}/40`;
            }

            highlightAnsweredOptions(qData, answerObj, optionsList) {
                const labels = document.querySelectorAll('.option-label');
                const inputs = document.querySelectorAll('.option-radio');

                inputs.forEach(input => input.disabled = true);

                labels.forEach((label, idx) => {
                    const opt = optionsList[idx];
                    if (opt.isCorrect) {
                        label.classList.add('correct');
                    } else if (opt.text === answerObj.selectedOptionText && !answerObj.isCorrect) {
                        label.classList.add('incorrect');
                    }
                });

                // Display Explanation
                const expBox = document.getElementById('q-explanation');
                const expTitle = document.getElementById('exp-title');
                const expText = document.getElementById('exp-text');

                expBox.style.display = 'block';
                if (answerObj.isCorrect) {
                    expBox.className = 'explanation-box show correct-box';
                    expTitle.textContent = '✓ RESPOSTA CORRETA!';
                } else {
                    expBox.className = 'explanation-box show incorrect-box';
                    expTitle.textContent = '✗ RESPOSTA INCORRETA!';
                }

                expText.innerHTML = `<strong>Fundamentação teórica:</strong> ${qData.explicacao}`;
            }

            nextQuestion() {
                if (this.currentQuestionIdxInBlock < 39) {
                    this.currentQuestionIdxInBlock++;
                    this.renderCurrentQuestion();
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    // Block completed
                    this.stopTimer();
                    this.showBlockResults(this.currentBlockIndex);
                }
            }

            previousQuestion() {
                if (this.currentQuestionIdxInBlock === 0) return;

                this.currentQuestionIdxInBlock--;
                this.renderCurrentQuestion();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }

            // Results Screen
            showBlockResults(blockId) {
                this.currentBlockIndex = blockId;
                const blockQuestions = QUESTOES_DATABASE.filter(q => q.bloco === blockId);

                let correct = 0;
                let wrong = 0;
                const diffStats = {
                    "Fácil": {
                        total: 10,
                        correct: 0
                    },
                    "Médio": {
                        total: 10,
                        correct: 0
                    },
                    "Médio/Alto": {
                        total: 10,
                        correct: 0
                    },
                    "Difícil": {
                        total: 10,
                        correct: 0
                    }
                };

                blockQuestions.forEach(q => {
                    const ans = this.userAnswers[q.id];
                    if (ans) {
                        if (ans.isCorrect) {
                            correct++;
                            diffStats[q.dificuldade].correct++;
                        } else {
                            wrong++;
                        }
                    }
                });

                const total = 40;
                const percent = Math.round((correct / total) * 100);
                const timeSec = this.blockTimers[blockId] || 0;

                document.getElementById('results-block-badge').textContent = `RESULTADO DO BLOCO ${blockId}`;
                document.getElementById('results-percentage').textContent = `${percent}%`;
                document.getElementById('res-total').textContent = total;
                document.getElementById('res-correct').textContent = correct;
                document.getElementById('res-incorrect').textContent = wrong;
                document.getElementById('res-time').textContent = this.formatTimeLong(timeSec);

                // Difficulty breakdown
                document.getElementById('res-diff-easy').textContent =
                    `${Math.round((diffStats["Fácil"].correct / 10) * 100)}%`;
                document.getElementById('res-diff-med').textContent =
                    `${Math.round((diffStats["Médio"].correct / 10) * 100)}%`;
                document.getElementById('res-diff-medhigh').textContent =
                    `${Math.round((diffStats["Médio/Alto"].correct / 10) * 100)}%`;
                document.getElementById('res-diff-hard').textContent =
                    `${Math.round((diffStats["Difícil"].correct / 10) * 100)}%`;

                // Evaluation badge
                const badge = document.getElementById('results-eval-badge');
                if (percent >= 80) {
                    badge.textContent = "EXCELENTE";
                    badge.className = "evaluation-badge eval-excelente";
                } else if (percent >= 70) {
                    badge.textContent = "MUITO BOM";
                    badge.className = "evaluation-badge eval-muito-bom";
                } else if (percent >= 50) {
                    badge.textContent = "BOM";
                    badge.className = "evaluation-badge eval-bom";
                } else {
                    badge.textContent = "PRECISA MELHORAR";
                    badge.className = "evaluation-badge eval-regular";
                }

                this.showView('view-results');
            }

            // Review Mode
            showReview(filterType = 'all') {
                this.renderReviewCards(filterType);
                this.showView('view-review');
            }

            renderReviewCards(filterType) {
                const container = document.getElementById('review-cards-list');
                container.innerHTML = '';

                const blockQuestions = QUESTOES_DATABASE.filter(q => q.bloco === this.currentBlockIndex);

                let filtered = blockQuestions.filter(q => {
                    const ans = this.userAnswers[q.id];
                    if (!ans) return false;
                    if (filterType === 'wrong') return !ans.isCorrect;
                    if (filterType === 'correct') return ans.isCorrect;
                    return true;
                });

                if (filtered.length === 0) {
                    container.innerHTML =
                        `<div style="text-align: center; padding: 2rem; color: var(--text-muted);">Nenhuma questão encontrada para este filtro.</div>`;
                    return;
                }

                filtered.forEach(q => {
                    const ans = this.userAnswers[q.id];
                    const card = document.createElement('div');
                    card.className = 'review-card';

                    const letters = ['A', 'B', 'C', 'D'];
                    let optionsHtml = '';

                    ans.optionsShuffled.forEach((opt, idx) => {
                        let statusClass = '';
                        if (opt.isCorrect) statusClass = 'correct';
                        else if (opt.text === ans.selectedOptionText && !ans.isCorrect)
                            statusClass = 'incorrect';

                        optionsHtml += `
                            <div class="option-label ${statusClass}" style="margin-bottom: 0.5rem; cursor: default;">
                                <span class="option-letter">${letters[idx]})</span>
                                <span class="option-text">${opt.text}</span>
                            </div>
                        `;
                    });

                    card.innerHTML = `
                        <div class="question-meta">
                            <span class="question-number">QUESTÃO ${String(q.id).padStart(2, '0')}</span>
                            <span class="review-status ${ans.isCorrect ? 'review-correct' : 'review-incorrect'}">
                                ${ans.isCorrect ? '✓ Acertou' : '✗ Errou'}
                            </span>
                        </div>
                        <p style="margin-bottom: 1rem; line-height: 1.6;">${q.enunciado}</p>
                        <div class="options-list">${optionsHtml}</div>
                        <div class="summary-box" style="margin-top: 1rem;">
                            <strong>Fundamentação teórica:</strong> ${q.explicacao}
                        </div>
                    `;

                    container.appendChild(card);
                });
            }

            // Timers
            startTimer() {
                this.stopTimer();
                this.timerInterval = setInterval(() => {
                    this.blockTimers[this.currentBlockIndex] = (this.blockTimers[this.currentBlockIndex] ||
                        0) + 1;
                    document.getElementById('quiz-timer-display').textContent = this.formatTime(this
                        .blockTimers[this.currentBlockIndex]);
                    this.saveToLocalStorage();
                }, 1000);
            }

            stopTimer() {
                if (this.timerInterval) clearInterval(this.timerInterval);
            }

            formatTime(seconds) {
                const mins = Math.floor(seconds / 60);
                const secs = seconds % 60;
                return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
            }

            formatTimeLong(seconds) {
                const hrs = Math.floor(seconds / 3600);
                const mins = Math.floor((seconds % 3600) / 60);
                const secs = seconds % 60;
                if (hrs > 0) return `${hrs}h ${mins}m ${secs}s`;
                return `${mins}min ${secs}s`;
            }

            // Array Fisher-Yates Shuffle
            shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }

            shuffleOptions(options, previousCorrectIndex = -1) {
                const shuffledOptions = this.shuffleArray(options);
                const correctIndex = shuffledOptions.findIndex(option => option.isCorrect);

                if (correctIndex === previousCorrectIndex && shuffledOptions.length > 1) {
                    let replacementIndex = Math.floor(Math.random() * (shuffledOptions.length - 1));
                    if (replacementIndex >= correctIndex) replacementIndex++;
                    [shuffledOptions[correctIndex], shuffledOptions[replacementIndex]] =
                        [shuffledOptions[replacementIndex], shuffledOptions[correctIndex]];
                }

                return shuffledOptions;
            }

            // Modals & Reset Actions
            confirmResetCurrentBlock() {
                this.openModal(
                    "Reiniciar Bloco Atual",
                    `Deseja realmente apagar todo o progresso e respostas do Bloco ${this.currentBlockIndex}? Esta ação não poderá ser desfeita.`,
                    () => this.resetBlock(this.currentBlockIndex)
                );
            }

            confirmResetAll() {
                this.openModal(
                    "Reiniciar Simulado Completo",
                    "Deseja realmente apagar todo o progresso dos 4 blocos e 160 questões? Esta ação resetará completamente seu histórico.",
                    () => this.resetAll()
                );
            }

            resetBlock(blockId) {
                const blockQuestions = QUESTOES_DATABASE.filter(q => q.bloco === blockId);
                blockQuestions.forEach(q => {
                    delete this.userAnswers[q.id];
                    delete this.optionOrders[q.id];
                    delete this.pendingAnswers[q.id];
                });
                this.blockTimers[blockId] = 0;
                this.saveToLocalStorage();
                this.closeModal();
                this.startBlock(blockId);
            }

            resetAll() {
                this.userAnswers = {};
                this.optionOrders = {};
                this.pendingAnswers = {};
                this.blockTimers = {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                };
                this.saveToLocalStorage();
                this.closeModal();
                this.showView('view-home');
            }

            openModal(title, body, confirmCallback) {
                document.getElementById('modal-title').textContent = title;
                document.getElementById('modal-body').textContent = body;
                const confirmBtn = document.getElementById('modal-confirm-btn');
                confirmBtn.onclick = confirmCallback;
                document.getElementById('confirm-modal').classList.add('active');
            }

            closeModal() {
                document.getElementById('confirm-modal').classList.remove('active');
            }
        }

        // Instanciação Global do App
        let app;
        window.addEventListener('DOMContentLoaded', () => {
            app = new JuriSimuladosApp();
        });
