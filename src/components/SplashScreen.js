import styled from 'styled-components';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <Container>
      <Content
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Kokteyl Bar</Title>
        <Spinner />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

const Content = styled(motion.div)`
  text-align: center;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: ${props => props.theme.spacing.large};
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border: 3px solid ${props => props.theme.colors.secondary};
  border-top: 3px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default SplashScreen;