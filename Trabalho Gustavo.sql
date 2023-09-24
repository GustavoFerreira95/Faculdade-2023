-- 1- Quantas vezes Natalie Portman foi indicada ao Oscar?
SELECT * FROM movies WHERE NAME="Natalie Portman";

-- 2- Quantos Oscars Natalie Portman ganhou?
SELECT * FROM movies WHERE NAME ="Natalie Portman" AND winner="true";

-- 3- Amy Adams já ganhou algum Oscar?
SELECT * FROM movies WHERE NAME ="Amy Adams"  AND winner="true";

-- 4- A série de filmes Toy Story ganhou um Oscar em quais anos?
SELECT * FROM movies WHERE film LIKE '%Toy Story%' AND winner="true";

-- 5- Quem tem mais Oscars: a categoria "Melhor Ator" ou "Melhor Filme"?
SELECT
    CASE
        WHEN SUM(category LIKE '%ACTOR%') > SUM(category LIKE '%BEST PICTURE%') THEN 'ACTOR'
        WHEN SUM(category LIKE '%ACTOR%') < SUM(category LIKE '%BEST PICTURE%') THEN 'BEST PICTURE'
        ELSE 'Ambas as categorias têm a mesma quantidade'
    END AS category_with_most_count
FROM movies;

-- 6- O primeiro Oscar para melhor Atriz foi para quem? Em que ano?
SELECT * FROM movies WHERE category LIKE '%ACTRESS%' AND winner = 'true' LIMIT 1;

-- 7- Na coluna/campo Winner, altere todos os valores com "True" para 1 e todos os valores "False" para 0.
UPDATE movies
SET winner = CASE 
                    WHEN winner = 'true' THEN '1'
                    WHEN winner = 'false' THEN '0'
                    ELSE winner
                 END
WHERE winner IN ('true', 'false');

-- 8- Em qual edição do Oscar "Crash" ganhou o prêmio principal?
SELECT * FROM movies WHERE film = 'Crash' AND winner ='true';

-- 9- Bom... dê um Oscar para um filme que merece muito, mas não ganhou.
UPDATE movies SET winner = 'true' WHERE film LIKE 'Back to the Future';

-- 10- O filme Central do Brasil aparece no Oscar?
SELECT * FROM movies WHERE film LIKE '%Central do Brasil%';

-- 11- Inclua no banco 3 filmes que nunca nem foram nomeados ao Oscar, mas que na sua opinião, merecem. 
INSERT INTO movies (year_film, year_ceremony, ceremony, category, `name`, film, winner) VALUES ('2019', '2020', '92', 'ACTOR', 'Josh Gad', 'Frozen 2', 'True');
INSERT INTO movies (year_film, year_ceremony, ceremony, category, `name`, film, winner) VALUES ('2003', '2004', '76', 'ACTOR', 'Steve Martinr', 'Doze É Demais - 2', 'True');
INSERT INTO movies (year_film, year_ceremony, ceremony, category, `name`, film, winner) VALUES ('2022', '2023', '95', 'ACTRESS', 'Salma Hayek', 'Gato de Botas 2: O Último Pedido', 'True');

-- 12- Crie uma nova categoria de premiação. Qualquer prêmio que você queira dar. Agora vamos dar esses prêmios aos filmes que você cadastrou na questão acima.
UPDATE movies
SET category = 'BEST CONTINUATION'
WHERE film IN ('Frozen 2', 'Doze É Demais - 2', 'Gato de Botas 2: O Último Pedido')
  AND (category = 'ACTOR' OR category = 'ACTRESS');
  
-- 13- Qual foi o primeiro ano a ter um prêmio do Oscar?
SELECT * FROM movies WHERE year_ceremony AND winner = 'true' LIMIT 1;

-- 14 - Pensando no ano em que você nasceu: Qual foi o Oscar de melhor filme, Melhor Atriz e Melhor Diretor?
SELECT * FROM movies WHERE year_film = '1995' AND (category = 'BEST PICTURE' OR category LIKE '%ACTRESS%' OR category = 'DIRECTING');

-- 15- Agora procure 7 atrizes que não sejam americanas, europeias ou brasileiras.  Vamos cadastrá-los no nosso banco, mas eles ainda não ganharam o Oscar. Só foram nomeados.
INSERT INTO movies (year_film, year_ceremony, ceremony, category, `name`, film, winner)
VALUES
    ('2000', '2001', '73', 'SUPPORTING ACTRESS', 'Zhang Ziyi', 'Crouching Tiger, Hidden Dragon', 'False'),
    ('2000', '2001', '73', 'SUPPORTING ACTRESS', 'Michelle Yeoh', 'Crouching Tiger, Hidden Dragon', 'False'),
    ('2001', '2002', '74', 'ACTRESS', 'Catalina Sandino Moreno', 'Maria Full of Grace', 'False'),
    ('2006', '2007', '79', 'SUPPORTING ACTRESS', 'Rinko Kikuchi', 'Babel', 'False'),
    ('2012', '2013', '85', 'ACTRESS', 'Emmanuelle Riva', 'Amour', 'False'),
    ('2018', '2019', '91', 'ACTRESS', 'Yalitza Aparicio', 'Roma', 'False'),
    ('2020', '2021', '93', 'ACTRESS', 'Youn Yuh-jung', 'Minari', 'False');
    
-- 16- Agora vamos falar da sua vida. Me diga o nome de uma pessoa que você admira e o que ela fez na sua vida. Agora me diz: Quê prêmio essa pessoa merece? 
INSERT INTO movies (year_film, year_ceremony, ceremony, category, `name`, film, winner) VALUES ('1995', '1996', '68', 'Melhor Mãe', 'Adriana Vieira', 'Minha Vida', 'True');    
    
    


