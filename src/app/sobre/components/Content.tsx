import React from "react";
import { Box, Container, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function Content() {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="md" sx={{ maxWidth: 700 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textTransform: "uppercase",
            fontSize: "2.2rem",
            textAlign: { xs: "center", md: "left" }, 
          }}
        >
          Sobre
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            lineHeight: 1.9,
            fontSize: "1.2rem",
            color: "#555",
            textAlign: { xs: "justify", md: "left" }, 
          }}
        >
          Olá, eu sou Zhydani Reis! Sou graduada em <strong>Sistemas de Informação</strong> pela Universidade Estadual do Tocantins 
          e atuo como desenvolvedora desde <strong>2018</strong>. Especialista em <strong>frontend</strong>, também tenho experiência com <strong>backend</strong>, 
          o que me permite criar soluções completas e funcionais.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            lineHeight: 1.9,
            fontSize: "1.2rem",
            color: "#555",
            textAlign: { xs: "justify", md: "left" },
          }}
        >
          Certificada em <strong>HTML, CSS, JavaScript</strong> e <strong>Web Design</strong>, trabalho com foco em criar experiências digitais intuitivas, 
          modernas e eficientes. Sou apaixonada por transformar ideias em projetos reais e estou sempre aprendendo novas 
          tecnologias para aprimorar meu trabalho.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: "bold",
            mt: 4,
            mb: 2,
            textTransform: "uppercase",
            fontSize: "1.5rem",
            textAlign: { xs: "center", md: "left" }, 
          }}
        >
          Meu TCC
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            lineHeight: 1.9,
            fontSize: "1.2rem",
            color: "#555",
            textAlign: { xs: "justify", md: "left" },
          }}
        >
          Meu Trabalho de Conclusão de Curso teve como tema <strong>“Desenvolvimento e Avaliação de App como Alternativa de Proteção 
          para as Mulheres em Situação de Violência Doméstica em Palmas - TO”</strong>. O projeto consistiu na criação de um aplicativo funcional, 
          desenvolvido em <strong>React</strong> com <strong>Firebase Cloud Firestore</strong> como backend. 
          Durante o desenvolvimento, criei o protótipo no <strong>Figma</strong> e realizei testes automatizados utilizando <strong>Jest</strong>. 
          Esse trabalho reforçou minha paixão por desenvolver soluções tecnológicas com impacto social.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: "bold",
            mt: 4,
            mb: 2,
            textTransform: "uppercase",
            fontSize: "1.5rem",
            textAlign: { xs: "center", md: "left" }, 
          }}
        >
          Certificados
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Curso de Treinamento e Capacitação Profissional Bootcamp Pega System (2023)"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Certificado de Web Design pela Origamid (2018)"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Certificado em HTML, CSS e JavaScript pela Caelum (2018)"
            />
          </ListItem>
        </List>

        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: "bold",
            mt: 4,
            mb: 2,
            textTransform: "uppercase",
            fontSize: "1.5rem",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Experiência em Web Design
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            lineHeight: 1.9,
            fontSize: "1.2rem",
            color: "#555",
            textAlign: { xs: "justify", md: "left" },
          }}
        >
          Tenho ampla experiência em <strong>Photoshop</strong> e <strong>Figma</strong>, ferramentas que utilizei para criar artes, protótipos e layouts 
          ao longo de diversos projetos. Minhas habilidades em design complementam meu trabalho como desenvolvedora, garantindo que 
          os produtos finais sejam funcionais e visualmente atraentes.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: "bold",
            mt: 4,
            mb: 2,
            textTransform: "uppercase",
            fontSize: "1.5rem",
            textAlign: { xs: "center", md: "left" }, 
          }}
        >
          Projetos de Destaque
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            lineHeight: 1.9,
            fontSize: "1.2rem",
            color: "#555",
            textAlign: { xs: "justify", md: "left" },
          }}
        >
          Em 2020, participei do projeto <strong>O Apto – Análise dos Portais da Transparência no Tocantins</strong>, 
          uma parceria entre o Tribunal de Contas do Estado do Tocantins e o Escritório de Soluções Criativas da Universidade Estadual do Tocantins. 
          Desenvolvemos uma plataforma para provisão de informações a auditores e gestores, além de possibilitar a participação cidadã na fiscalização 
          da transparência dos municípios e do estado do Tocantins.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            lineHeight: 1.9,
            fontSize: "1.2rem",
            color: "#555",
            textAlign: { xs: "justify", md: "left" },
          }}
        >
          Adicionei a <strong>barra de acessibilidade</strong> no portal do <strong>TJTO</strong>, contribuindo para 
          a inclusão digital e acessibilidade de todos os usuários.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: "bold",
            mt: 4,
            mb: 2,
            textTransform: "uppercase",
            fontSize: "1.5rem",
            textAlign: { xs: "center", md: "left" }, 
          }}
        >
          Publicações de Aplicativos
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.9,
            fontSize: "1.2rem",
            color: "#555",
            textAlign: { xs: "justify", md: "left" },
          }}
        >
          Já publiquei mais de <strong>7 aplicativos</strong> na Apple Store e Google Play utilizando <strong>React Native</strong>. 
          Esses aplicativos foram projetados com foco em usabilidade, desempenho e inovação.
        </Typography>
      </Container>
    </Box>
  );
}
