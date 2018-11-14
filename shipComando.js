module.exports = async function (app, message, comando, args) {

    if(comando == 'ship')
    {
        try{
           
                    // requer biblioteca Jimp
                    var Jimp = require('jimp');

                    message.channel.startTyping();
                    // pegar os dados de cada posição dos args
                   var mention_1 = args[0];
                    var mention_2 = args[1];

                    if(!mention_1 || !mention_2)
                    {
                        message.channel.send(`${message.author}, Informe os parâmetros corretamente \`f!ship @mention + @mention\``);
                        message.channel.stopTyping(true);
                        return;
                    }

                    
                    // comparar se o dado fornecidado é uma menção
                 

                    /* Pegar o id do membro mencionado, o melhor metodo que eu acho que seja (é claro deve ter como fazer melhor) 
                    foi utilizando replace que assim quando menciona o membro é caido junto com <@291212> e transforma em 2939219321 */
                   var mention_tratado = mention_1.replace('<','').replace('>','').replace('@','').replace('!','');
                    var mention_tratado_2 = mention_2.replace('<','').replace('>','').replace('@','').replace('!','');
                 
                   
                    // recebendo os Id dos membros mencionados
                    var username_ship_1 = message.guild.member(mention_tratado || message.guild.members.get(args[0]));
                    var username_ship_2 = message.guild.member(mention_tratado_2 || message.guild.members.get(args[1]));


                    /*
                    	uma forma de validar se o autor que executou o comando foi válido
                    */
                    if (username_ship_1 === null || username_ship_2 === null) 
                    {
                        message.channel.send(`${message.author}, Informe os parâmetros corretamente \`f!ship @mention + @mention\``);
                        message.channel.stopTyping(true);
                        return;
                    }

                    // porcentagem do ship
                    var random_ship = Math.floor((Math.random() * 100) + 1);
                   
                    // imagens do coração
                    var imagens_ships = ['diretorio da imagem 0', '.diretorio da imagem 1', 'diretorio da imagem 2']; // array dos diretorios das imagens
                    var valor_img = 0; // esta variável possui a função de marcar a posição do array para que assim ele receba valor daquela posição como segue em baixo nas condições

                    // imprimir uma mensagem
                    var mensagem = '';

                    // tratar os usernames dos membros
                    var username_shippado_1 = username_ship_1.user.username.substring(4, 0); // remover 80% das palavras do usuario para que possa forma uma com as duas
                    var username_shippado_2 = username_ship_2.user.username.substring(4, 8);// remover 80% das palavras do usuario para que possa forma uma com as duas
                    var shipps = username_shippado_1 + username_shippado_2; // resultado da palavra formada com as duas username_shippado_1 + username_shippado_2
                    

                    // condições de gerar frases e imagens (matenhe a condição com && para sempre cair entre)
                    if(random_ship > 1 && random_ship <= 15)
                    {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[█..........]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n È.... pelo jeito você nem está no sonho dele(a)... :broken_heart::frowning: `
                        valor_img = 2; // posição do array da varável imagens_ships
                        
                    } if(random_ship > 15 && random_ship <= 20)
                    {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[██.........]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n   Pelo jeito você não vai perder a amizade né :sweat_smile::sweat_smile:  `
                        valor_img = 2;// posição do array da varável imagens_ships
                    }if(random_ship > 20 && random_ship <= 30)
                    {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[███........]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n Pelo menos vão ficar na friendzone hehe :sweat_smile: `
                        valor_img = 1; // posição do array da varável imagens_ships 
                    }if(random_ship > 30 && random_ship <= 40)
                    {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[████.......]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n Olha olha colega, vou até mandar uma cantada "Garota, é mais fácil o Vasco não ser rebaixado do que eu te abandonar.":heart:  `
                        valor_img = 1;  // posição do array da varável imagens_ships
                    }
                    if(random_ship > 40 && random_ship <= 50)
                    {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[█████......]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n Bom, pode correr atrás que um dia vocês estarão juntos... :heart: :smile:  `
                        valor_img = 1; // posição do array da varável imagens_ships
                    }
                    if (random_ship > 50 && random_ship <= 60) {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[██████.....]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n 50/50 em.... :smiling_imp:   `
                        valor_img = 0;// posição do array da varável imagens_ships
                    }
                    if (random_ship > 60 && random_ship <= 70) {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[███████....]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n Vocês podem ter uma bela relação juntos em uma amizade saudavel  :heart: :smile:  `
                        valor_img = 0;// posição do array da varável imagens_ships
                    }
                    if (random_ship > 70 && random_ship <= 80) {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[████████...]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n La vai mais uma "Desculpe, me empreste um óculos escuro, porque sua beleza brilha mais do que o Sol"  :smile:  `
                        valor_img = 0;// posição do array da varável imagens_ships
                    }
                    if (random_ship > 80 && random_ship <= 90) {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[█████████..]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n Temos um casal se formando em .... :smile: hehehe. :heart:  `
                        valor_img = 0;// posição do array da varável imagens_ships
                    }
                    if (random_ship > 90 && random_ship <= 100) {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[███████████]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n Estes aí provavelmente foram feitos um para outro :heart: :heart: :heart:  `
                        valor_img = 0;
                    }


                    // Utilizando Jimp para gerar o ship (é preciso que você crie suas imagens para colocar no lugar destes comentado)
                    Jimp.read('diretorio da imagem de fundo').then(image =>{ // <== lugar aonde fica o plano de fundo da imagem
                        Jimp.read(imagens_ships[valor_img]).then(imageTwo =>{
                            Jimp.read(username_ship_1.user.avatarURL).then(imageThree =>{ //  imagem do avatar 1
                                Jimp.read(username_ship_2.user.avatarURL).then(imageFor =>{ // imagem do avatar 2
                                    imageTwo.resize(129, 129);
                                    imageThree.resize(129, 129);
                                    imageFor.resize(129,129);
                                    image.blit(imageTwo, 130, Jimp.HORIZONTAL_ALIGN_CENTER)
                                    .blit(imageThree, Jimp.HORIZONTAL_ALIGN_LEFT, Jimp.HORIZONTAL_ALIGN_CENTER).
                                    blit(imageFor, 260, Jimp.HORIZONTAL_ALIGN_CENTER).
                                    quality(100).write('diretorio e o nome da imagem que sera criado');// exemplo (.img/eduardo.png)


                                    // mandar o resultado do comando por fim
                                    message.channel.send(mensagem, {
                                        files: [
                                            './img/ship_franklin.jpg'
                                        ]
                                    }).then( r =>{
                                        message.channel.stopTyping(true);
                                    });
                                  
                                });
                            });
                    });
                
            });
          
        }catch (error)
        {
            message.channel.send(`${message.author}, houve um erro ao executar este comando :frowning: , desculpe pela incoveniência esto reportando para o suporte!`);
            console.log(error);
        }

    }
}