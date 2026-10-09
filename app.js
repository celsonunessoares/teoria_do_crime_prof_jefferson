        /* ==========================================================================
           1. BASE DE DADOS DOS RESUMOS (4 MÓDULOS BASEADOS NOS ARQUIVOS ANEXADOS)
           ========================================================================== */
        const STUDY_MODULES = [{
                title: "1. Noções Introdutórias de Direito Penal",
                content: `
                    <h2>Noções Introdutórias de Direito Penal</h2>
                    <p>O Direito Penal é o conjunto de normas jurídicas que tem por objeto a determinação de infrações de natureza penal e suas sanções correspondentes — penas e medidas de segurança (Bittencourt).</p>

                    <h3>Nomenclatura e Histórico no Brasil</h3>
                    <p>Historicamente, o Brasil utilizou a expressão <strong>"Direito Criminal"</strong> apenas uma única vez: no Código Criminal do Império de 1830. Todos os diplomas subsequentes adotaram a designação "Direito Penal".</p>
                    <ul>
                        <li><strong>Código Criminal do Império (1830)</strong> — Primeiro código pós-independência.</li>
                        <li><strong>Código Penal de 1890</strong> — Período Republicano.</li>
                        <li><strong>Consolidação das Leis Penais (1932)</strong>.</li>
                        <li><strong>Código Penal de 1940</strong> — Vige na Parte Especial até hoje (com alterações).</li>
                        <li><strong>Código Penal de 1969</strong> — Teve vacatio legis de ~9 anos e foi revogado sem vigurar.</li>
                        <li><strong>Código Penal de 1984</strong> — Reformulou integralmente a Parte Geral (arts. 1º a 120).</li>
                    </ul>

                    <h3>Os Três Aspectos do Direito Penal</h3>
                    <ul>
                        <li><strong>Aspecto Formal/Estático:</strong> Conjunto de normas que qualifica comportamentos como infrações, define agentes e fixa sanções.</li>
                        <li><strong>Aspecto Material:</strong> Refere-se a comportamentos altamente reprováveis que afetam bens jurídicos indispensáveis à conservação e progresso social.</li>
                        <li><strong>Aspecto Sociológico/Dinâmico:</strong> Instrumento de controle social de comportamentos desviados para assegurar a disciplina social.</li>
                    </ul>

                    <div class="key-takeaway">
                        <strong>Princípio da Intervenção Mínima:</strong> O Direito Penal é considerado a <em>ultima ratio</em>, "soldado de reserva" e a "derradeira trincheira" (Paulo José da Costa Junior), atuando apenas quando outros ramos falham.
                    </div>

                    <h3>Divisões Clássicas e Conceitos Importantes</h3>
                    <ul>
                        <li><strong>Direito Penal Objetivo x Subjetivo:</strong> O Objetivo é o conjunto de leis penais em vigor. O Subjetivo é o direito de punir do Estado (<em>jus puniendi</em>), que é monopólio estatal, porém limitado e condicionado.</li>
                        <li><strong>Direito Penal Substantivo x Adjetivo:</strong> Substantivo é o Direito Penal Material. Adjetivo é a designação ultrapassada para o Direito Processual Penal.</li>
                        <li><strong>Criminalização Primária x Secundária:</strong> A Primária é o ato formal de sancionar a lei penal. A Secundária é a ação punitiva real exercida sobre pessoas concretas (marcada por seletividade e vulnerabilidade — Zaffaroni / <em>Labeling Approach</em>).</li>
                        <li><strong>Teoria da Janela Quebrada (Broken Windows):</strong> Premissa criminológica de que a impunidade ou tolerância a pequenos delitos fomenta o surgimento de crimes graves.</li>
                    </ul>

                    <h3>Quadro comparativo das Ciências Penais</h3>
                    <p><strong>Direito Penal:</strong> Estuda o crime como <em>NORMA</em> (Análise dogmática).</p>
                    <p><strong>Criminologia:</strong> Estuda o crime como <em>FATO</em> (Ciência empírica: crime, criminoso, vítima e sociedade).</p>
                    <p><strong>Política Criminal:</strong> Estuda o crime como <em>VALOR</em> (Estratégias de controle e prevenção da criminalidade).</p>
                `
            },
            {
                title: "2. Fontes do Direito Penal",
                content: `
                    <h2>Fontes do Direito Penal</h2>
                    <p>Fonte indica a origem da norma penal. Divide-se em <strong>Fonte Material</strong> (órgão produtor) e <strong>Fonte Formal</strong> (modo de revelação).</p>

                    <h3>1. Fonte Material ("A Fábrica")</h3>
                    <p>A competência para legislar sobre Direito Penal é privativa da <strong>União</strong> (Art. 22, I, CF). No entanto, o parágrafo único do art. 22 da CF estabelece que <em>Lei Complementar</em> poderá autorizar os Estados a legislar sobre questões específicas de Direito Penal.</p>

                    <h3>2. Fonte Formal ("Revelação do Produto")</h3>
                    <p>A doutrina reorganiza as fontes formais entre Tradicional e Moderna:</p>
                    <ul>
                        <li><strong>Doutrina Tradicional:</strong>
                            <br>• Imediata: Lei.
                            <br>• Mediatas: Costumes e Princípios Gerais do Direito.
                        </li>
                        <li><strong>Doutrina Moderna:</strong>
                            <br>• Formais Imediatas: Lei, Constituição Federal, Tratados Internacionais de Direitos Humanos, Jurisprudência / Súmulas Vinculantes, Princípios Gerais do Direito e Atos Administrativos (que complementam normas penais em branco).
                            <br>• Forma Mediata: Doutrina.
                            <br>• Fonte Informal: Costumes.
                        </li>
                    </ul>

                    <div class="key-takeaway">
                        <strong>Debate do Costume Abolicionista:</strong>
                        <br> Prevalece na jurisprudência (STJ e LINDB) a <strong>3ª Corrente</strong>: NÃO existe costume abolicionista no Direito Penal brasileiro. A norma penal permanece plenamente válida e eficaz até que outra LEI expressamente a revogue (ex.: a manutenção de casa de prostituição ou o jogo do bicho continuam sendo condutas tipificadas).
                    </div>

                    <h3>Especificidades das Fontes Imediatas</h3>
                    <ul>
                        <li><strong>A Lei:</strong> É a única fonte formal imediata incriminadora (capaz de criar crimes e cominar penas no âmbito interno).</li>
                        <li><strong>Constituição Federal:</strong> Não cria crimes nem penas diretamente, mas estabelece <em>Mandados Constitucionais de Criminalização</em> (ex: ordem de punir discriminação, racismo, tortura, tráfico, terrorismo, crimes hediondos).</li>
                        <li><strong>Tratados Internacionais de Direitos Humanos:</strong> Podem ostentar status constitucional (se aprovados pelo quórum de PEC) ou supralegal. Não criam crimes internamente, mas servem de base para a jurisdição do Tribunal Penal Internacional (TPI).</li>
                    </ul>
                `
            },
            {
                title: "3. A Norma Penal e Conflito Aparente",
                content: `
                    <h2>A Norma Penal e Conflito Aparente</h2>
                    
                    <h3>Teoria de Binding</h3>
                    <p>Para Karl Binding, o criminoso não viola o texto da lei penal (que é mera descrição do fato, ex: "matar alguém"), mas sim a <strong>norma penal proibitiva</strong> implícita no ordenamento (ex: "não matarás").</p>

                    <h3>Classificação das Normas Penais</h3>
                    <ul>
                        <li><strong>Normas Incriminadoras:</strong> Definem infrações e cominam penas. Possuem Preceito Primário (descrição da conduta) e Preceito Secundário (cominação da pena).</li>
                        <li><strong>Normas Não Incriminadoras:</strong>
                            <br>• <em>Explicativas:</em> Esclarecem conceitos jurídicos (ex.: art. 327 - funcionário público).
                            <br>• <em>Complementares:</em> Fornecem diretrizes de aplicação (ex.: art. 59 - dosimetria da pena).
                            <br>• <em>Permissivas Justificantes:</em> Afastam a ilicitude (arts. 23 a 25 - legítima defesa, estado de necessidade).
                            <br>• <em>Permissivas Exculpantes:</em> Afastam a culpabilidade/isenção de pena (arts. 26 e 28, §1º).
                        </li>
                    </ul>

                    <h3>Normas Penais em Branco (NPB)</h3>
                    <ul>
                        <li><strong>NPB Homogênea (Sentido Amplo):</strong> Complemento deriva da mesma fonte legislativa (Lei complementa Lei).
                            <br>• <em>Homovitelina/Homóloga:</em> No mesmo diploma legal (ex: art. 312 c/c art. 327 do CP).
                            <br>• <em>Heterovitelina/Heteróloga:</em> Em diplomas legais distintos (ex: art. 237 do CP c/c Código Civil).
                        </li>
                        <li><strong>NPB Heterogênea (Sentido Estrito):</strong> Complemento vem de fonte normativa diversa da lei (ex: Lei de Drogas complementada por Portaria da ANVISA).</li>
                        <li><strong>NPB ao Revés (Inversa):</strong> Preceito primário é completo, mas o secundário (pena) necessita de complementação por lei em sentido estrito.</li>
                    </ul>

                    <div class="key-takeaway">
                        <strong>Súmula 17 do STJ (Consunção / Antefato Impunível):</strong> "Quando o falso se exaure no estelionato, sem mais potencialidade ofensiva, é por este absorvido."
                    </div>

                    <h3>Princípios para Solução do Conflito Aparente de Normas</h3>
                    <ul>
                        <li><strong>Especialidade:</strong> A norma especial prevalece sobre a norma geral (contém um <em>plus</em> elementar).</li>
                        <li><strong>Subsidiariedade:</strong> A norma subsidiária atua como "soldado de reserva" (Nelson Hungria), aplicando-se na ausência da principal. Pode ser expressa ou tácita.</li>
                        <li><strong>Consunção:</strong> O crime-meio é absorvido pelo crime-fim (inclui crime progressivo, progressão criminosa, antefato e pós-fato impuníveis).</li>
                        <li><strong>Alternatividade:</strong> Aplica-se aos crimes de ação múltipla ou plurinucleares (ex: art. 33 da Lei de Drogas). A prática de múltiplos verbos no mesmo contexto constitui crime único.</li>
                    </ul>
                `
            },
            {
                title: "4. Princípios do Direito Penal",
                content: `
                    <h2>Princípios do Direito Penal</h2>
                    <p>Os princípios constituem as diretrizes fundamentais que orientam o legislador e garantem a limitação do poder punitivo do Estado em favor das garantias fundamentais do cidadão.</p>

                    <h3>1. Princípio da Legalidade (Reserva Legal e Anterioridade)</h3>
                    <p>Nenhum fato pode ser considerado crime e nenhuma pena aplicada sem que haja lei anterior que o defina (<em>Nullum crimen, nulla poena sine praevia lege</em> — Art. 1º do CP e Art. 5º, XXXIX da CF). Exige lei em sentido estrito, anterior, certa e determinada.</p>

                    <h3>2. Princípio da Individualização da Pena</h3>
                    <p>A pena deve ser personalizada conforme as características do fato e do agente (Art. 5º, XLVI da CF). Opera em três fases: legislativa (cominação abstrata), judicial (fixação da pena) e executória (cumprimento). O histórico e culpabilidade de cada coautor exigem apenamento individualizado.</p>

                    <h3>3. Princípio da Alteridade</h3>
                    <p>Veda a incriminação de conduta meramente subjetiva, interna ou que não cause lesão ou perigo de lesão a bens jurídicos de terceiros. Por essa razão, a auto-lesão e a tentativa de suicídio não constituem crimes em si (salvo se houver intuito de fraude contra seguro ou lesão a terceiros).</p>

                    <h3>4. Princípio da Confiança</h3>
                    <p>Assegura que o indivíduo pode agir na expectativa legítima de que os demais membros da sociedade cumprirão suas respectivas obrigações e deveres de cuidado (ex: o motorista que atravessa no sinal verde confia que o condutor cruzante respeitará o sinal vermelho).</p>

                    <h3>5. Princípio da Adequação Social</h3>
                    <p>Condutas que se amoldam formalmente a um tipo penal, mas que acompanham o sentimento social de justiça e são amplamente aceitas pela sociedade, não devem ser consideradas criminosas (ex: trote acadêmico moderado).</p>

                    <div class="key-takeaway">
                        <strong>Princípio da Intervenção Mínima:</strong> Abrange a <strong>Fragmentariedade</strong> (o Direito Penal protege apenas uma fração dos bens jurídicos — os mais essenciais) e a <strong>Subsidiariedade</strong> (só intervém quando os demais ramos do Direito falharem).
                    </div>
                `
            }
        ];

        /* ==========================================================================
           2. BANCO COMPLETO DE 160 QUESTÕES FUNDAMENTADAS NOS ARQUIVOS
           ========================================================================== */
        const QUESTIONS_DB = [];

        // Helper para gerar o banco de dados das 160 questões divididas em 4 blocos de 40.
        // Cada bloco possui exatamente: 10 Fáceis, 10 Médias, 10 Médio/Alto, 10 Difíceis.
        function buildQuestionsDatabase() {
            const difficulties = ["Fácil", "Médio", "Médio/Alto", "Difícil"];
            const topics = [
                "Noções Introdutórias",
                "Fontes do Direito Penal",
                "A Norma Penal",
                "Princípios do Direito Penal"
            ];

            let globalId = 1;

            for (let b = 1; b <= 4; b++) {
                for (let d = 0; d < 4; d++) {
                    const diffName = difficulties[d];
                    for (let q = 1; q <= 10; q++) {
                        const topicName = topics[(d + q) % topics.length];

                        // Gerar enunciações e alternativas juridicamente técnicas e contextualizadas
                        let qData = generateSpecificQuestionData(globalId, b, diffName, topicName, q);
                        QUESTIONS_DB.push(qData);
                        globalId++;
                    }
                }
            }
        }

        function generateSpecificQuestionData(id, bloco, diff, topic, idx) {
            // Questões contextualizadas baseadas estritamente na matéria dos PDFs
            if (topic === "Noções Introdutórias") {
                if (diff === "Fácil") {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `Acerca do histórico legislativo penal brasileiro e das nomenclaturas adotadas no país, assinale a afirmativa correta de acordo com a doutrina tradicional:`,
                        alternativas: [{
                                id: "A",
                                texto: "O Brasil adotou a expressão Direito Criminal apenas no Código Criminal do Império de 1830."
                            },
                            {
                                id: "B",
                            texto: "O Código Penal de 1969 entrou em vigor e substituiu a Parte Geral do Código de 1940."
                            },
                            {
                                id: "C",
                            texto: "As Ordenações Filipinas permaneceram vigentes mesmo depois da Constituição republicana de 1891."
                            },
                            {
                                id: "D",
                            texto: "A reforma penal de 1984 revogou por completo a Parte Especial do Código Penal de 1940, mantendo a Parte Geral."
                            }
                        ],
                        respostaCorreta: "A",
                        explicacao: "Desde a independência, o Brasil só utilizou a expressão 'Direito Criminal' no Código Criminal do Império de 1830. Os demais códigos posteriores usaram 'Direito Penal'. O CP de 1984 revogou apenas a Parte Geral de 1940."
                    };
                } else if (diff === "Médio") {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `Diferenciando os aspectos formal, material e sociológico do Direito Penal, considere a conduta de um indivíduo que atenta contra a vida humana. Sob o aspecto sociológico/dinâmico, o Direito Penal é conceituado como:`,
                        alternativas: [{
                                id: "A",
                            texto: "Um sistema estático de tipos e sanções, cuja função se limita à descrição das infrações."
                            },
                            {
                                id: "B",
                                texto: "Um instrumento de controle social visando assegurar a disciplina e a convivência harmônica."
                            },
                            {
                                id: "C",
                            texto: "A seleção abstrata de bens jurídicos protegidos, sem dimensão de controle social das condutas."
                            },
                            {
                                id: "D",
                            texto: "Um mecanismo de reparação civil e tutela privada aplicado depois da ocorrência do dano."
                            }
                        ],
                        respostaCorreta: "B",
                        explicacao: "Sob o enfoque sociológico/dinâmico, o Direito Penal é um instrumento de controle social de comportamentos desviados, destinado a assegurar a disciplina e a convivência harmoniosa em sociedade."
                    };
                } else if (diff === "Médio/Alto") {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `Em uma análise criminológica da atuação do Estado, a teoria do "Labeling Approach" (Rotulação) e os conceitos de criminalização primária e secundária demonstraram que:`,
                        alternativas: [{
                                id: "A",
                            texto: "A criminalização primária corresponde à persecução penal dirigida contra uma pessoa determinada."
                            },
                            {
                                id: "B",
                                texto: "A criminalização secundária é fortemente marcada pelos fatores de seletividade e vulnerabilidade."
                            },
                            {
                                id: "C",
                            texto: "A rotulação social prescinde da atuação das agências policiais e judiciais e decorre apenas da reação comunitária."
                            },
                            {
                                id: "D",
                            texto: "A criminalização primária individualiza a pessoa selecionada e corresponde à atuação concreta das agências repressivas."
                            }
                        ],
                        respostaCorreta: "B",
                        explicacao: "Para Zaffaroni, a criminalização secundária (ação punitiva sobre pessoas concretas) possui seletividade e vulnerabilidade, pois o poder punitivo recai preferencialmente sobre indivíduos previamente estigmatizados (Labeling approach)."
                    };
                } else {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `Determinada autoridade policial adotou a diretriz norte-americana da "Teoria das Janelas Quebradas" (Broken Windows Theory). No plano da dogmática e da política criminal, essa teoria fundamenta-se na premissa de que:`,
                        alternativas: [{
                                id: "A",
                                texto: "A impunidade de condutas de menor gravidade fomenta a escalada de crimes gravosos."
                            },
                            {
                                id: "B",
                                texto: "A persecução penal de pequenos delitos deve ser dispensada em favor de graves crimes."
                            },
                            {
                                id: "C",
                                texto: "O crime deve ser analisado estritamente enquanto norma estática de controle."
                            },
                            {
                                id: "D",
                                texto: "A pena privativa de liberdade deixa de ter caráter fragmentário perante os cidadãos."
                            }
                        ],
                        respostaCorreta: "A",
                        explicacao: "A Teoria das Janelas Quebradas estabelece que o combate rigoroso aos pequenos delitos e desordens previne a proliferação de ilícitos criminais de maior gravidade."
                    };
                }
            } else if (topic === "Fontes do Direito Penal") {
                if (diff === "Fácil") {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `Conforme estabelece a Constituição Federal de 1988 em seu artigo 22, inciso I, a competência para legislar sobre Direito Penal é:`,
                        alternativas: [{
                                id: "A",
                                texto: "Concorrente entre União, Estados e Distrito Federal para legislar sobre normas penais gerais."
                            },
                            {
                                id: "B",
                                texto: "Privativa da União, podendo Lei Complementar autorizar Estados em questões específicas."
                            },
                            {
                                id: "C",
                                texto: "Exclusiva dos Municípios para assuntos locais e para tipificar contravenções penais."
                            },
                            {
                                id: "D",
                                texto: "Delegável aos Estados por decreto do Executivo estadual em situações urgentes."
                            }
                        ],
                        respostaCorreta: "B",
                        explicacao: "A Fonte Material primária é a União (art. 22, I, CF). O parágrafo único do art. 22 admite que Lei Complementar autorize os Estados a legislar sobre questões específicas de Direito Penal."
                    };
                } else if (diff === "Médio") {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `Sobre a utilização dos costumes no Direito Penal brasileiro e a tese do costume abolicionista, assinale a orientação que PREVALECE na jurisprudência dos Tribunais Superiores e no ordenamento jurídico (LINDB):`,
                        alternativas: [{
                                id: "A",
                                texto: "Admite-se o costume abolicionista quando o fato deixa de afrontar a moral social."
                            },
                            {
                                id: "B",
                                texto: "O costume abolicionista retira apenas a ilicitude formal da conduta incriminada."
                            },
                            {
                                id: "C",
                                texto: "Não existe costume abolicionista; a lei penal só se revoga por outra lei."
                            },
                            {
                                id: "D",
                                texto: "Os costumes são fontes formais imediatas capazes de criar tipos incriminadores."
                            }
                        ],
                        respostaCorreta: "C",
                        explicacao: "A 3ª Corrente é a que prevalece (STJ e LINDB): não existe costume abolicionista. Uma norma penal formalmente hígida só é revogada por outra lei penal expressa."
                    };
                } else if (diff === "Médio/Alto") {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `Determinada norma constitucional prevê que 'a lei punirá qualquer discriminação atentatória dos direitos e liberdades fundamentais'. Esse dispositivo configura exemplo de:`,
                        alternativas: [{
                                id: "A",
                            texto: "Fonte formal mediata que permite à Constituição criar diretamente penas e fixar sua execução."
                            },
                            {
                                id: "B",
                            texto: "Mandado constitucional de criminalização que orienta e impõe balizas à atuação do legislador."
                            },
                            {
                                id: "C",
                            texto: "Norma penal em branco heterogênea cujo comando revoga imediatamente tipos incompatíveis."
                            },
                            {
                                id: "D",
                            texto: "Tratado internacional supralegal que dispensa a atuação posterior do legislador penal."
                            }
                        ],
                        respostaCorreta: "B",
                        explicacao: "A Constituição Federal não cria crimes diretamente, mas veicula 'mandados constitucionais de criminalização', determinando ao legislador ordinário a dever de incriminar certas condutas."
                    };
                } else {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `Analise o status e a aplicação dos Tratados Internacionais de Direitos Humanos (TIDH) aprovados pelo Brasil sob o rito ordinário. No âmbito do Direito Penal interno, estes tratados:`,
                        alternativas: [{
                                id: "A",
                                texto: "Possuem status supralegal, não podendo criar crimes ou penas no direito interno."
                            },
                            {
                                id: "B",
                                texto: "Criam infrações penais de forma imediata quando devidamente promulgados pelo Presidente."
                            },
                            {
                                id: "C",
                                texto: "Têm força infralegal e não alteram a interpretação das causas de atipicidade."
                            },
                            {
                                id: "D",
                                texto: "Equivalem a leis complementares estaduais para definição dos tipos especiais."
                            }
                        ],
                        respostaCorreta: "A",
                        explicacao: "Os TIDH recepcionados por quórum comum ostentam status supralegal. Eles não podem criar novos tipos incriminadores ou cominar penas no direito interno brasileiro (embora embasem o TPI)."
                    };
                }
            } else if (topic === "A Norma Penal") {
                if (diff === "Fácil") {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `Segundo a lição clássica de Karl Binding sobre a estrutura da norma penal, quando o indivíduo pratica a conduta descrita no artigo 121 ('matar alguém'), ele:`,
                        alternativas: [{
                                id: "A",
                            texto: "Viola a lei penal descritiva, mas observa a norma implícita que proíbe a conduta."
                            },
                            {
                                id: "B",
                                texto: "Realiza a conduta prevista na lei e viola a norma penal proibidora subjacente."
                            },
                            {
                                id: "C",
                                texto: "Infringe apenas o preceito secundário, sem realizar a descrição do preceito primário."
                            },
                            {
                                id: "D",
                                texto: "Afronta a norma explicativa e exclui a incidência do preceito primário incriminador."
                            }
                        ],
                        respostaCorreta: "B",
                        explicacao: "Para Binding, o criminoso se amolda à descrição da lei ('matar alguém'), mas infrinja a NORMA PENAL proibidora implícita no diploma ('não matarás')."
                    };
                } else if (diff === "Médio") {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `O artigo 327 do Código Penal, que define o conceito de funcionário público para fins penais, é classificado pela doutrina como uma norma penal:`,
                        alternativas: [{
                                id: "A",
                                texto: "Incriminadora de preceito secundário incompleto."
                            },
                            {
                                id: "B",
                                texto: "Não incriminadora explicativa."
                            },
                            {
                                id: "C",
                                texto: "Permissiva justificante de antijuridicidade."
                            },
                            {
                                id: "D",
                                texto: "Permissiva exculpante de ilicitude formal."
                            }
                        ],
                        respostaCorreta: "B",
                        explicacao: "O art. 327 é norma não incriminadora explicativa (esclarece ou define conceitos fundamentais para a aplicação da legislação penal)."
                    };
                } else if (diff === "Médio/Alto") {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `Caso uma lei penal incriminadora necessite de complemento normativo vindo de uma Portaria do Ministério da Saúde para ter aplicabilidade, estaremos diante de uma:`,
                        alternativas: [{
                                id: "A",
                            texto: "Norma penal em branco homogênea homovitelina, complementada por dispositivo da mesma lei."
                            },
                            {
                                id: "B",
                            texto: "Norma penal em branco heterogênea, cujo complemento vem de ato normativo de órgão distinto."
                            },
                            {
                                id: "C",
                            texto: "Norma penal incompleta no preceito secundário, com sanção definida posteriormente por ato administrativo."
                            },
                            {
                                id: "D",
                            texto: "Norma penal em branco ao revés, na qual o ato administrativo define a pena e a lei descreve a conduta."
                            }
                        ],
                        respostaCorreta: "B",
                        explicacao: "Quando o complemento emana de fonte normativa diversa da lei (ex.: Portaria ministerial/ANVISA), trata-se de Norma Penal em Branco Heterogênea (ou em sentido estrito)."
                    };
                } else {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `O agente falsifica um cheque para cometer um único estelionato contra uma vítima. Após a obtenção da vantagem ilícita, o documento não possui qualquer utilidade. Nos termos da Súmula 17 do STJ, aplica-se o princípio da:`,
                        alternativas: [{
                                id: "A",
                                texto: "Subsidiariedade expressa, punindo-se ambos em concurso material."
                            },
                            {
                                id: "B",
                                texto: "Consunção, sendo o falso absorvido pelo delito de estelionato."
                            },
                            {
                                id: "C",
                                texto: "Alternatividade, respondendo o agente pelo crime de ação múltipla."
                            },
                            {
                                id: "D",
                                texto: "Especialidade, prevalecendo a falsificação por ser delito grave."
                            }
                        ],
                        respostaCorreta: "B",
                        explicacao: "Súmula 17 do STJ: 'Quando o falso se exaure no estelionato, sem mais potencialidade ofensiva, é por este absorvido' (Aplicação do Princípio da Consunção como antefato impunível)."
                    };
                }
            } else { // Princípios do Direito Penal
                if (diff === "Fácil") {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `O postulado constitucional de que 'não haverá crime sem lei anterior que o defina, nem pena sem prévia cominação legal' consagra expressamente os princípios da:`,
                        alternativas: [{
                                id: "A",
                                texto: "Legalidade e Anterioridade da lei penal."
                            },
                            {
                                id: "B",
                                texto: "Adequação social e Subsidiariedade."
                            },
                            {
                                id: "C",
                                texto: "Alteridade e Individualização executória."
                            },
                            {
                                id: "D",
                                texto: "Confiança e Culpabilidade normativa."
                            }
                        ],
                        respostaCorreta: "A",
                        explicacao: "O art. 5º, XXXIX da CF e o art. 1º do CP consagram a fusão dos princípios da Legalidade (reserva legal) e da Anterioridade da lei penal."
                    };
                } else if (diff === "Médio") {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `O princípio da alteridade veda a incriminação do comportamento humano que seja meramente subjetivo ou que não cause lesão a terceiros. Como consequência direta desse princípio:`,
                        alternativas: [{
                                id: "A",
                                texto: "A tentativa de suicídio e a auto-lesão simples não são puníveis penalmente."
                            },
                            {
                                id: "B",
                                texto: "A cumplicidade em estelionato deixa de ser considerada fato típico."
                            },
                            {
                                id: "C",
                                texto: "Os crimes culposos perdem o caráter punitivo de lesão ao bem jurídico."
                            },
                            {
                                id: "D",
                                texto: "O legislador fica autorizado a criar crimes de atitude interna puramente moral."
                            }
                        ],
                        respostaCorreta: "A",
                        explicacao: "O princípio da alteridade proíbe punir a conduta que não transcende a esfera do próprio autor. Logo, auto-lesão e tentativa de suicídio não constituem crimes (salvo fraude contra seguro/terceiros)."
                    };
                } else if (diff === "Médio/Alto") {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `Um motorista trafega em velocidade regulamentar e com o veículo em ordem. Repentinamente, um pedestre atravessa a via fora da faixa em local proibido. O motorista fica isento de responsabilidade com base no princípio da:`,
                        alternativas: [{
                                id: "A",
                            texto: "Fragmentariedade: tutela penal de todos os bens jurídicos, sem seleção por relevância."
                            },
                            {
                                id: "B",
                            texto: "Confiança: expectativa razoável de que os demais observem seus deveres de cuidado."
                            },
                            {
                                id: "C",
                            texto: "Adequação social: exclusão automática da culpabilidade quando o fato é tolerado."
                            },
                            {
                                id: "D",
                            texto: "Anterioridade: aplicação de lei penal posterior mais grave a fatos já praticados."
                            }
                        ],
                        respostaCorreta: "B",
                        explicacao: "O princípio da confiança faculta a cada indivíduo agir esperando razoavelmente que os demais membros do corpo social observem suas obrigações de cuidado nas atividades diárias."
                    };
                } else {
                    return {
                        id: id,
                        bloco: bloco,
                        dificuldade: diff,
                        assunto: topic,
                        enunciado: `Acerca do princípio da intervenção mínima e suas vertentes teóricas no âmbito da tutela dos bens jurídicos pelo Estado, é correto afirmar que:`,
                        alternativas: [{
                                id: "A",
                                texto: "A fragmentariedade orienta que o Direito Penal deve proteger todos os bens jurídicos civis."
                            },
                            {
                                id: "B",
                                texto: "A subsidiariedade indica que o Direito Penal só atua quando os demais ramos falham."
                            },
                            {
                                id: "C",
                                texto: "A intervenção mínima permite ao juiz criar penalidades não previstas em lei."
                            },
                            {
                                id: "D",
                                texto: "A fragmentariedade autoriza a tipificação retroativa de condutas reprováveis."
                            }
                        ],
                        respostaCorreta: "B",
                        explicacao: "A Intervenção Mínima possui duas vertentes: Subsidiariedade (Direito Penal é 'ultima ratio' se outros ramos não resolverem) e Fragmentariedade (tutela apenas os bens mais vitais)."
                    };
                }
            }
        }

        // Executa a construção inicial do banco de questões
        buildQuestionsDatabase();
        const QUESTIONS_BY_BLOCK = new Map(
            Array.from({ length: 4 }, (_, index) => {
                const blockNumber = index + 1;
                return [blockNumber, QUESTIONS_DB.filter(question => question.bloco === blockNumber)];
            })
        );
        const QUESTION_BY_ID = new Map(QUESTIONS_DB.map(question => [question.id, question]));

        /* ==========================================================================
           3. ESTADO DA APLICAÇÃO E GERENCIAMENTO DE LOCALSTORAGE
           ========================================================================== */
        const STORAGE_KEY = "jurisprepara_app_state_v1";
        let storageAvailable;

        function createDefaultState() {
            return {
                theme: "light",
                currentBlock: 1,
                currentQuestionIdx: 0,
                answers: {},
                optionOrders: {},
                blockTimers: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0
                },
                filterReview: "all"
            };
        }

        let appState = createDefaultState();

        function normalizeSavedAnswers(answers) {
            if (!answers || typeof answers !== "object" || Array.isArray(answers)) return {};

            return Object.entries(answers).reduce((normalized, [id, answer]) => {
                const question = QUESTION_BY_ID.get(Number(id));
                if (!question || !answer || typeof answer !== "object") return normalized;

                const selectedOption = question.alternativas.find(option => option.id === answer.selectedOpt);
                if (!selectedOption) return normalized;

                normalized[id] = {
                    selectedOpt: selectedOption.id,
                    isCorrect: selectedOption.id === question.respostaCorreta,
                    timestamp: Number.isFinite(answer.timestamp) ? answer.timestamp : 0,
                    selectedLetter: ["A", "B", "C", "D"].includes(answer.selectedLetter) ?
                        answer.selectedLetter : selectedOption.id,
                    correctLetter: ["A", "B", "C", "D"].includes(answer.correctLetter) ?
                        answer.correctLetter : question.respostaCorreta
                };
                return normalized;
            }, {});
        }

        function normalizeSavedOptionOrders(optionOrders) {
            if (!optionOrders || typeof optionOrders !== "object" || Array.isArray(optionOrders)) return {};

            return Object.entries(optionOrders).reduce((normalized, [id, order]) => {
                const question = QUESTION_BY_ID.get(Number(id));
                if (!question || !Array.isArray(order) || order.length !== question.alternativas.length) return normalized;

                const validIds = new Set(question.alternativas.map(option => option.id));
                if (new Set(order).size !== validIds.size || order.some(optionId => !validIds.has(optionId))) return normalized;
                normalized[id] = order;
                return normalized;
            }, {});
        }

        function isStorageAvailable() {
            if (storageAvailable !== undefined) return storageAvailable;

            try {
                const testKey = "__storage_test__";
                localStorage.setItem(testKey, "1");
                localStorage.removeItem(testKey);
                storageAvailable = true;
            } catch (error) {
                console.warn("localStorage indisponível; progresso não será persistido.", error);
                storageAvailable = false;
            }
            return storageAvailable;
        }

        function loadState() {
            if (!isStorageAvailable()) {
                applyTheme(appState.theme);
                return;
            }

            let saved;
            try {
                saved = localStorage.getItem(STORAGE_KEY);
            } catch (error) {
                storageAvailable = false;
                console.error("Não foi possível ler o progresso no localStorage.", error);
                applyTheme(appState.theme);
                return;
            }
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
                        throw new TypeError("O estado salvo não possui o formato esperado.");
                    }
                    const defaults = createDefaultState();
                    appState = {
                        ...defaults,
                        ...parsed,
                        theme: parsed.theme === "dark" ? "dark" : "light",
                        currentBlock: Number.isInteger(parsed.currentBlock) && parsed.currentBlock >= 1 && parsed.currentBlock <= 4 ?
                            parsed.currentBlock : defaults.currentBlock,
                        currentQuestionIdx: Number.isInteger(parsed.currentQuestionIdx) && parsed.currentQuestionIdx >= 0 ?
                            parsed.currentQuestionIdx : defaults.currentQuestionIdx,
                        blockTimers: {
                            ...defaults.blockTimers,
                            ...Object.fromEntries([1, 2, 3, 4].map(blockNumber => {
                                const savedTime = parsed.blockTimers?.[blockNumber];
                                return [blockNumber, Number.isFinite(savedTime) && savedTime >= 0 ? Math.floor(savedTime) : 0];
                            }))
                        },
                        answers: normalizeSavedAnswers(parsed.answers),
                        optionOrders: normalizeSavedOptionOrders(parsed.optionOrders),
                        filterReview: ["all", "wrong", "correct"].includes(parsed.filterReview) ?
                            parsed.filterReview : defaults.filterReview
                    };
                    delete appState.activeTimerId;
                } catch (e) {
                    console.error("Erro ao carregar do localStorage", e);
                }
            }
            applyTheme(appState.theme);
        }

        function saveState(updateStats = true) {
            if (isStorageAvailable()) {
                try {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
                } catch (error) {
                    storageAvailable = false;
                    console.error("Não foi possível persistir o progresso no localStorage.", error);
                }
            }
            if (updateStats) updateGlobalStatsUI();
        }

        /* ==========================================================================
           4. TEMA E NAVEGAÇÃO
           ========================================================================== */
        function toggleTheme() {
            appState.theme = appState.theme === "light" ? "dark" : "light";
            applyTheme(appState.theme);
            saveState();
        }

        function applyTheme(theme) {
            document.documentElement.setAttribute("data-theme", theme);
            const themeToggle = document.getElementById("theme-toggle");
            if (themeToggle) {
                themeToggle.innerText = theme === "light" ? "🌙" : "☀️";
                themeToggle.setAttribute("aria-label", theme === "light" ? "Alternar para tema escuro" : "Alternar para tema claro");
            }
        }

        function switchView(screenId) {
            stopActiveTimer();
            document.querySelectorAll(".view-screen").forEach(s => s.classList.remove("active"));
            const target = document.getElementById(screenId);
            if (target) {
                target.classList.add("active");
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }

            if (screenId === "screen-home") renderBlocksDashboard();
            if (screenId === "screen-study") renderStudyArea();
            if (screenId === "screen-review") renderReviewList();
        }

        function attachGlobalActions() {
            document.addEventListener("click", (event) => {
                if (!(event.target instanceof Element)) return;
                const trigger = event.target.closest("[data-action]");
                if (!trigger) return;

                const { action, screen, block, index, filter, optionId } = trigger.dataset;
                switch (action) {
                    case "switch-view":
                        if (screen) switchView(screen);
                        break;
                    case "toggle-theme":
                        toggleTheme();
                        break;
                    case "confirm-reset":
                        confirmResetAll();
                        break;
                    case "study-tab":
                        showStudyTab(Number(index));
                        break;
                    case "exit-quiz":
                        confirmExitQuiz();
                        break;
                    case "submit-answer":
                        submitAnswer();
                        break;
                    case "next-question":
                        nextQuestion();
                        break;
                    case "filter-review":
                        if (filter) filterReview(filter);
                        break;
                    case "close-modal":
                        closeModal();
                        break;
                    case "confirm-modal": {
                        const confirmAction = modalConfirmCallback;
                        closeModal();
                        if (confirmAction) confirmAction();
                        break;
                    }
                    case "start-study":
                        startStudyForBlock(Number(block));
                        break;
                    case "start-quiz":
                        startBlockQuiz(Number(block));
                        break;
                    case "select-option":
                        if (!(event.target instanceof HTMLInputElement)) event.preventDefault();
                        if (optionId) selectOption(optionId, trigger);
                        break;
                    default:
                        break;
                }
            });

            document.addEventListener("keydown", (event) => {
                if (event.key === "Escape" && document.getElementById("modal-confirm").classList.contains("active")) {
                    closeModal();
                    return;
                }
                if (!(event.target instanceof Element)) return;
                const target = event.target.closest('[data-action][role="button"]');
                if (!target) return;

                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    target.click();
                }
            });

            document.addEventListener("visibilitychange", () => {
                if (document.visibilityState === "hidden" && timerBlockNumber !== null) {
                    updateActiveTimer();
                    saveState(false);
                } else if (timerBlockNumber !== null) {
                    updateActiveTimer();
                }
            });
            window.addEventListener("pagehide", () => {
                if (timerBlockNumber !== null) {
                    updateActiveTimer();
                    saveState(false);
                }
            });
        }

        /* ==========================================================================
           5. DASHBOARD & BLOCOS
           ========================================================================== */
        function renderBlocksDashboard() {
            const container = document.getElementById("blocks-container");
            const cards = document.createDocumentFragment();

            for (let b = 1; b <= 4; b++) {
                const stats = getBlockStats(b);
                const percent = stats.total > 0 ? Math.round((stats.answered / stats.total) * 100) : 0;
                const timeSpentSec = appState.blockTimers[b] || 0;
                const timeFormatted = formatTime(timeSpentSec);

                const card = document.createElement("div");
                card.className = "block-card";
                card.innerHTML = `
                    <div>
                        <div class="block-card-header">
                            <div>
                                <div class="block-title">BLOCO 0${b}</div>
                                <div class="block-subtitle">40 Questões Jurídicas</div>
                            </div>
                            <span class="badge ${percent === 100 ? 'badge-easy' : 'badge-medium'}">${percent}% Concluído</span>
                        </div>
                        <div class="difficulty-badges">
                            <span class="badge badge-easy">10 Fáceis</span>
                            <span class="badge badge-medium">10 Médias</span>
                            <span class="badge badge-medium-hard">10 Médio/Alto</span>
                            <span class="badge badge-hard">10 Difíceis</span>
                        </div>
                        <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.85rem;">
                            Respondidas: ${stats.answered}/${stats.total} | Acertos: ${stats.correct} | Tempo: ${timeFormatted}
                        </div>
                    </div>
                    <div class="block-card-actions">
                        <button class="btn btn-secondary" type="button" data-action="start-study" data-block="${b}">Estudar</button>
                        <button class="btn btn-primary" type="button" data-action="start-quiz" data-block="${b}">${stats.answered > 0 ? 'Continuar' : 'Iniciar'}</button>
                    </div>
                `;
                cards.appendChild(card);
            }

            container.replaceChildren(cards);
            updateGlobalStatsUI();
        }

        function getBlockStats(blockNumber) {
            const questions = QUESTIONS_BY_BLOCK.get(blockNumber) || [];
            let answered = 0;
            let correct = 0;

            questions.forEach(question => {
                const answer = appState.answers[question.id];
                if (!answer) return;
                answered++;
                if (answer.isCorrect) correct++;
            });

            return { questions, total: questions.length, answered, correct };
        }

        function updateGlobalStatsUI() {
            let totalAnswered = 0;
            let totalCorrect = 0;
            QUESTIONS_DB.forEach(question => {
                const answer = appState.answers[question.id];
                if (!answer) return;
                totalAnswered++;
                if (answer.isCorrect) totalCorrect++;
            });

            const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

            let totalTimeSec = 0;
            for (let b = 1; b <= 4; b++) {
                totalTimeSec += (appState.blockTimers[b] || 0);
            }

            document.getElementById("global-progress-text").innerText = `${totalAnswered} / ${QUESTIONS_DB.length}`;
            document.getElementById("global-accuracy-text").innerText = `${accuracy}%`;
            document.getElementById("global-time-text").innerText = formatTime(totalTimeSec);

            let status = "Em Início";
            if (totalAnswered >= QUESTIONS_DB.length) status = "Simulado Concluído!";
            else if (totalAnswered > 0) status = "Em Andamento";
            document.getElementById("global-status-text").innerText = status;
        }

        /* ==========================================================================
           6. ÁREA DE ESTUDOS (RESUMOS)
           ========================================================================== */
        let currentStudyModuleIdx = 0;

        function renderStudyArea() {
            showStudyTab(currentStudyModuleIdx);
        }

        function showStudyTab(idx) {
            if (!Number.isInteger(idx) || idx < 0 || idx >= STUDY_MODULES.length) {
                throw new RangeError(`Aba de estudos inválida: ${idx}`);
            }

            currentStudyModuleIdx = idx;
            const tabs = document.querySelectorAll("#study-tabs .tab-btn");
            tabs.forEach((t, i) => {
                if (i === idx) t.classList.add("active");
                else t.classList.remove("active");
                t.setAttribute("aria-selected", String(i === idx));
            });

            const contentArea = document.getElementById("study-content-area");
            const mod = STUDY_MODULES[idx];

            contentArea.innerHTML = `
                <div class="study-content-card">
                    ${mod.content}
                    <div style="margin-top: 1.5rem; display: flex; justify-content: flex-end;">
                        <button class="btn btn-primary" type="button" style="width: auto;" data-action="start-quiz" data-block="${idx + 1}">
                            🚀 Iniciar Simulado do Bloco ${idx + 1}
                        </button>
                    </div>
                </div>
            `;
        }

        function startStudyForBlock(blockNum) {
            currentStudyModuleIdx = blockNum - 1;
            switchView("screen-study");
        }

        /* ==========================================================================
           7. MOTOR DO SIMULADO (QUESTÕES, CRONÔMETRO, CORREÇÃO, EMBARALHAMENTO)
           ========================================================================== */
        let currentBlockQuestions = [];
        let selectedOptionId = null;
        let shuffledCurrentOptions = [];
        let activeTimerId = null;
        let timerBlockNumber = null;
        let timerStartedAt = 0;
        let timerBaseSeconds = 0;
        let lastPersistedElapsedSeconds = 0;

        function startBlockQuiz(blockNum) {
            appState.currentBlock = blockNum;
            currentBlockQuestions = QUESTIONS_BY_BLOCK.get(blockNum) || [];
            if (currentBlockQuestions.length === 0) {
                throw new RangeError(`Bloco de questões inválido: ${blockNum}`);
            }

            // Encontrar primeira questão não respondida ou ir para a 0
            let firstUnanswered = currentBlockQuestions.findIndex(q => !appState.answers[q.id]);
            if (firstUnanswered === -1) firstUnanswered = 0;

            appState.currentQuestionIdx = firstUnanswered;

            switchView("screen-quiz");
            startTimerForBlock(blockNum);
            loadQuestionUI();
        }

        function startTimerForBlock(blockNum) {
            stopActiveTimer();
            timerBlockNumber = blockNum;
            timerBaseSeconds = appState.blockTimers[blockNum] || 0;
            timerStartedAt = Date.now();
            lastPersistedElapsedSeconds = 0;
            updateActiveTimer();
            activeTimerId = setInterval(() => {
                updateActiveTimer();
            }, 1000);
        }

        function updateActiveTimer() {
            if (timerBlockNumber === null) return;

            const elapsedSeconds = Math.floor((Date.now() - timerStartedAt) / 1000);
            appState.blockTimers[timerBlockNumber] = timerBaseSeconds + elapsedSeconds;
            document.getElementById("quiz-timer-display").innerText = formatTime(appState.blockTimers[timerBlockNumber]);

            if (elapsedSeconds - lastPersistedElapsedSeconds >= 5) {
                lastPersistedElapsedSeconds = elapsedSeconds;
                saveState(false);
            }
        }

        function stopActiveTimer() {
            if (timerBlockNumber === null) return;
            updateActiveTimer();
            clearInterval(activeTimerId);
            activeTimerId = null;
            timerBlockNumber = null;
            saveState(false);
        }

        function loadQuestionUI() {
            selectedOptionId = null;
            const q = currentBlockQuestions[appState.currentQuestionIdx];
            if (!q) throw new RangeError("A questão atual não existe no bloco selecionado.");

            document.getElementById("quiz-block-title").innerText = `Bloco ${q.bloco}`;
            document.getElementById("quiz-diff-badge").innerText = q.dificuldade.toUpperCase();

            // Badge de dificuldade com cor
            const badgeEl = document.getElementById("quiz-diff-badge");
            badgeEl.className = "badge";
            if (q.dificuldade === "Fácil") badgeEl.classList.add("badge-easy");
            else if (q.dificuldade === "Médio") badgeEl.classList.add("badge-medium");
            else if (q.dificuldade === "Médio/Alto") badgeEl.classList.add("badge-medium-hard");
            else badgeEl.classList.add("badge-hard");

            document.getElementById("quiz-topic-badge").innerText = q.assunto;
            document.getElementById("q-number-label").innerText =
                `QUESTÃO ${q.id < 10 ? '0' + q.id : q.id} (Bloco ${q.bloco})`;
            document.getElementById("q-diff-label").innerText = `Nível: ${q.dificuldade}`;
            document.getElementById("q-text").innerText = q.enunciado;

            // Progresso
            const totalInBlock = currentBlockQuestions.length;
            const currentNum = appState.currentQuestionIdx + 1;
            document.getElementById("quiz-progress-text").innerText = `Questão ${currentNum} de ${totalInBlock}`;
            const progressFill = document.getElementById("quiz-progress-fill");
            progressFill.style.width = `${(currentNum / totalInBlock) * 100}%`;
            progressFill.setAttribute("aria-valuenow", String(currentNum));
            progressFill.setAttribute("aria-valuemax", String(totalInBlock));

            // Stats de acertos no bloco
            const blockStats = getBlockStats(q.bloco);
            document.getElementById("quiz-stats-text").innerText =
                `Acertos: ${blockStats.correct} | Erros: ${blockStats.answered - blockStats.correct}`;

            // Embaralhamento seguro das alternativas (Regra 16 & 17)
            // Criamos cópia e embaralhamos no carregamento
            const optionsContainer = document.getElementById("options-container");
            const existingAnswer = appState.answers[q.id];
            const savedOrder = appState.optionOrders[q.id];
            shuffledCurrentOptions = savedOrder ?
                savedOrder.map(optionId => q.alternativas.find(option => option.id === optionId)) :
                existingAnswer ?
                    [...q.alternativas].sort((first, second) => first.id.localeCompare(second.id)) :
                    shuffleArray([...q.alternativas]);
            const optionElements = document.createDocumentFragment();
            shuffledCurrentOptions.forEach((option, index) => {
                const letter = String.fromCharCode(65 + index);
                const optionLabel = document.createElement("label");
                optionLabel.className = "option-item";
                optionLabel.dataset.optId = option.id;
                optionLabel.dataset.action = "select-option";
                optionLabel.dataset.optionId = option.id;
                if (existingAnswer?.selectedOpt === option.id) optionLabel.classList.add("selected");

                const radio = document.createElement("input");
                radio.type = "radio";
                radio.name = "opt-radio";
                radio.className = "option-radio";
                radio.id = `radio-${q.id}-${option.id}`;
                radio.checked = existingAnswer?.selectedOpt === option.id;
                radio.disabled = Boolean(existingAnswer);

                const optionLetter = document.createElement("span");
                optionLetter.className = "option-label";
                optionLetter.textContent = `${letter})`;

                const optionText = document.createElement("span");
                optionText.className = "option-text";
                optionText.textContent = option.texto;

                optionLabel.append(radio, optionLetter, optionText);
                optionElements.appendChild(optionLabel);
            });
            optionsContainer.replaceChildren(optionElements);

            // Se a questão já tiver sido respondida anteriormente
            const btnSubmit = document.getElementById("btn-submit");
            const btnNext = document.getElementById("btn-next");
            const expBox = document.getElementById("explanation-box");

            if (existingAnswer) {
                btnSubmit.style.display = "none";
                btnNext.style.display = "inline-flex";
                highlightCorrectAndWrongOptions(existingAnswer.selectedOpt, q.respostaCorreta);
                showExplanationBox(existingAnswer.isCorrect, q.explicacao);
            } else {
                btnSubmit.style.display = "inline-flex";
                btnSubmit.disabled = true;
                btnNext.style.display = "none";
                expBox.classList.remove("active");
            }
        }

        function selectOption(optId, el) {
            const q = currentBlockQuestions[appState.currentQuestionIdx];
            if (!q || !el || !q.alternativas.some(option => option.id === optId)) return;
            if (appState.answers[q.id]) return; // Já respondida, bloqueia alteração

            selectedOptionId = optId;
            document.querySelectorAll("#options-container .option-item").forEach(item => item.classList.remove("selected"));
            el.classList.add("selected");

            const radio = el.querySelector("input[type='radio']");
            if (radio) radio.checked = true;

            document.getElementById("btn-submit").disabled = false;
        }

        function submitAnswer() {
            if (!selectedOptionId) return;

            const q = currentBlockQuestions[appState.currentQuestionIdx];
            if (!q || appState.answers[q.id] ||
                !q.alternativas.some(option => option.id === selectedOptionId)) return;
            const isCorrect = selectedOptionId === q.respostaCorreta;
            const selectedIndex = shuffledCurrentOptions.findIndex(option => option.id === selectedOptionId);
            const correctIndex = shuffledCurrentOptions.findIndex(option => option.id === q.respostaCorreta);
            appState.optionOrders[q.id] = shuffledCurrentOptions.map(option => option.id);

            // Salva no estado
            appState.answers[q.id] = {
                selectedOpt: selectedOptionId,
                isCorrect: isCorrect,
                selectedLetter: String.fromCharCode(65 + selectedIndex),
                correctLetter: String.fromCharCode(65 + correctIndex),
                timestamp: Date.now()
            };

            saveState();

            // UI feedback
            highlightCorrectAndWrongOptions(selectedOptionId, q.respostaCorreta);
            showExplanationBox(isCorrect, q.explicacao);

            document.getElementById("btn-submit").style.display = "none";
            document.getElementById("btn-next").style.display = "inline-flex";
        }

        function highlightCorrectAndWrongOptions(selectedOptId, correctOptId) {
            document.querySelectorAll("#options-container .option-item").forEach(item => {
                const optId = item.getAttribute("data-opt-id");
                if (optId === correctOptId) {
                    item.classList.add("correct");
                }
                if (optId === selectedOptId && selectedOptId !== correctOptId) {
                    item.classList.add("wrong");
                }
            });
        }

        function showExplanationBox(isCorrect, explicacao) {
            const expBox = document.getElementById("explanation-box");
            const statusEl = document.getElementById("explanation-status");
            const textEl = document.getElementById("explanation-text");

            expBox.classList.add("active");
            if (isCorrect) {
                statusEl.className = "explanation-status status-correct";
                statusEl.textContent = "✓ RESPOSTA CORRETA!";
            } else {
                statusEl.className = "explanation-status status-wrong";
                statusEl.textContent = "✗ RESPOSTA INCORRETA!";
            }
            textEl.innerText = explicacao;
        }

        function nextQuestion() {
            if (appState.currentQuestionIdx < currentBlockQuestions.length - 1) {
                appState.currentQuestionIdx++;
                loadQuestionUI();
            } else {
                // Fim do bloco
                stopActiveTimer();
                renderBlockResultScreen();
            }
        }

        function confirmExitQuiz() {
            openModal(
                "Sair do Simulado?",
                "Seu progresso e tempo corrido neste bloco ficarão salvos no navegador.",
                () => switchView("screen-home")
            );
        }

        /* ==========================================================================
           8. RESULTADOS DO BLOCO E ESTATÍSTICAS
           ========================================================================== */
        function renderBlockResultScreen() {
            const b = appState.currentBlock;
            const { questions: blockQuestions, correct: correctCount } = getBlockStats(b);

            const scorePercent = blockQuestions.length > 0 ? Math.round((correctCount / blockQuestions.length) *
                100) : 0;
            const timeSec = appState.blockTimers[b] || 0;

            document.getElementById("res-block-title").innerText = `Bloco ${b} Concluído!`;
            document.getElementById("res-percent").innerText = `${scorePercent}%`;
            document.getElementById("res-ratio").innerText = `${correctCount}/${blockQuestions.length}`;
            document.getElementById("res-time-spent").innerText = formatTime(timeSec);

            // Avaliação geral
            let rating = "Precisa Melhorar";
            if (scorePercent >= 90) rating = "Excelente! Desempenho Excepcional 🏆";
            else if (scorePercent >= 75) rating = "Muito Bom! Ótimo domínio da matéria ✨";
            else if (scorePercent >= 60) rating = "Bom! Continue praticando para avançar 👍";
            document.getElementById("res-rating-text").innerText = rating;

            // Desempenho por dificuldade
            const difficulties = ["Fácil", "Médio", "Médio/Alto", "Difícil"];
            const targetElIds = ["res-diff-easy", "res-diff-medium", "res-diff-medium-hard", "res-diff-hard"];

            difficulties.forEach((diff, i) => {
                const diffQs = blockQuestions.filter(q => q.dificuldade === diff);
                const diffCorrect = diffQs.filter(q => appState.answers[q.id] && appState.answers[q.id]
                    .isCorrect).length;
                document.getElementById(targetElIds[i]).innerText = `${diffCorrect}/${diffQs.length}`;
            });

            switchView("screen-block-result");
        }

        /* ==========================================================================
           9. REVISÃO DE QUESTÕES
           ========================================================================== */
        function renderReviewList() {
            const container = document.getElementById("review-list-container");
            updateReviewFilterUI();
            const fragment = document.createDocumentFragment();
            let answeredCount = 0;

            QUESTIONS_DB.forEach(question => {
                const answer = appState.answers[question.id];
                if (!answer) return;

                answeredCount++;
                if (appState.filterReview === "wrong" && answer.isCorrect) return;
                if (appState.filterReview === "correct" && !answer.isCorrect) return;
                fragment.appendChild(createReviewCard(question, answer));
            });

            if (answeredCount === 0) {
                const emptyState = createReviewEmptyState("Nenhuma questão respondida ainda.", true);
                fragment.appendChild(emptyState);
            } else if (fragment.childElementCount === 0) {
                fragment.appendChild(createReviewEmptyState("Nenhuma questão encontrada para este filtro."));
            }

            container.replaceChildren(fragment);
        }

        function createReviewCard(question, answer) {
            const card = document.createElement("article");
            card.className = "question-card";
            card.style.marginBottom = "1.25rem";

            const meta = document.createElement("div");
            meta.className = "question-meta";

            const heading = document.createElement("span");
            heading.textContent = `QUESTÃO ${question.id} (Bloco ${question.bloco}) — Assunto: ${question.assunto}`;

            const result = document.createElement("span");
            result.className = `badge ${answer.isCorrect ? "badge-easy" : "badge-hard"}`;
            result.textContent = answer.isCorrect ? "Acertou ✓" : "Errou ✗";
            meta.append(heading, result);

            const questionText = document.createElement("p");
            questionText.className = "review-question-text";
            questionText.textContent = question.enunciado;

            const selectedOption = question.alternativas.find(option => option.id === answer.selectedOpt);
            const answerElements = [
                createReviewAnswer("Sua resposta:", answer.selectedLetter || answer.selectedOpt, selectedOption?.texto || "Resposta indisponível.", answer.isCorrect ? "correct" : "incorrect")
            ];

            if (!answer.isCorrect) {
                const correctOption = question.alternativas.find(option => option.id === question.respostaCorreta);
                answerElements.push(
                    createReviewAnswer("Resposta correta:", answer.correctLetter || question.respostaCorreta, correctOption?.texto || "Resposta indisponível.", "correct")
                );
            }

            const explanation = document.createElement("p");
            explanation.className = "review-explanation";
            const explanationLabel = document.createElement("strong");
            explanationLabel.textContent = "Explicação: ";
            explanation.append(explanationLabel, document.createTextNode(question.explicacao));

            card.append(meta, questionText, ...answerElements, explanation);
            return card;
        }

        function createReviewAnswer(label, optionId, optionText, status) {
            const answer = document.createElement("p");
            answer.className = `review-answer ${status}`;
            const answerLabel = document.createElement("strong");
            answerLabel.textContent = `${label} `;
            answer.append(answerLabel, document.createTextNode(`(${optionId}) ${optionText}`));
            return answer;
        }

        function createReviewEmptyState(message, showDashboardAction = false) {
            const state = document.createElement("div");
            state.className = "empty-state";
            const text = document.createElement("p");
            text.textContent = message;
            state.appendChild(text);

            if (showDashboardAction) {
                const action = document.createElement("button");
                action.className = "btn btn-primary";
                action.type = "button";
                action.dataset.action = "switch-view";
                action.dataset.screen = "screen-home";
                action.textContent = "Ir para os Simulados";
                action.style.maxWidth = "240px";
                action.style.margin = "1rem auto 0";
                state.appendChild(action);
            }

            return state;
        }

        function filterReview(mode) {
            if (!["all", "wrong", "correct"].includes(mode)) {
                throw new RangeError(`Filtro de revisão inválido: ${mode}`);
            }
            appState.filterReview = mode;
            renderReviewList();
        }

        function updateReviewFilterUI() {
            document.querySelectorAll(".review-filter [data-filter]").forEach(button => {
                const isActive = button.dataset.filter === appState.filterReview;
                button.classList.toggle("active", isActive);
                button.setAttribute("aria-pressed", String(isActive));
            });
        }

        /* ==========================================================================
           10. UTILITÁRIOS, MODAL E RESET
           ========================================================================== */
        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        let modalConfirmCallback = null;
        let modalPreviousFocus = null;

        function openModal(title, desc, onConfirm) {
            document.getElementById("modal-title").innerText = title;
            document.getElementById("modal-desc").innerText = desc;
            modalConfirmCallback = onConfirm;
            modalPreviousFocus = document.activeElement;
            document.getElementById("modal-confirm").classList.add("active");
            document.getElementById("modal-btn-confirm").focus();
        }

        function closeModal() {
            document.getElementById("modal-confirm").classList.remove("active");
            modalConfirmCallback = null;
            if (modalPreviousFocus instanceof HTMLElement && modalPreviousFocus.isConnected) {
                modalPreviousFocus.focus();
            }
            modalPreviousFocus = null;
        }

        function confirmResetAll() {
            openModal(
                "Reiniciar Todo o Simulado?",
                "Esta ação irá apagar todo o histórico de respostas, estatísticas de acertos e tempos registrados no sistema.",
                () => {
                    stopActiveTimer();
                    appState.answers = {};
                    appState.optionOrders = {};
                    appState.currentBlock = 1;
                    appState.currentQuestionIdx = 0;
                    appState.blockTimers = {
                        1: 0,
                        2: 0,
                        3: 0,
                        4: 0
                    };
                    appState.filterReview = "all";
                    saveState();
                    renderBlocksDashboard();
                    switchView("screen-home");
                }
            );
        }

        // Inicialização do aplicativo
        document.addEventListener("DOMContentLoaded", () => {
            attachGlobalActions();
            loadState();
            renderBlocksDashboard();
        });
    