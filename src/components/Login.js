import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { users } from "../data/users";
import { FaUser } from "react-icons/fa";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (user) => {
    await login(user);
    navigate("/");
  };

  return (
    <Container>
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header>
          <LogoImage src="/images/logo.png" alt="Kahriman Logo" />
          <Title>Kahri&Kahri</Title>
          <Subtitle>COCKTAIL & MIXOLOGY</Subtitle>
          <Decoration>
            {/* <Line />
            <Circle />
            <Line /> */}
          </Decoration>
        </Header>

        <UserGrid>
          {users.map((user) => (
            <UserCard
              key={user.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLogin(user)}
            >
              <UserAvatar>
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} />
                ) : (
                  <FaUser size={24} />
                )}
              </UserAvatar>
              <UserName>{user.name}</UserName>
            </UserCard>
          ))}
        </UserGrid>
      </Content>
    </Container>
  );
};

const LogoImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  object-fit: contain;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 52px;
  letter-spacing: 6px;
  margin-bottom: 20px;
  font-weight: 500;
`;

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.headline};
  font-size: 18px;
  letter-spacing: 8px;
  margin-bottom: 35px;
  font-weight: 400;
`;

const Decoration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
  &::before, &::after {
    content: '';
    width: 100px;
    height: 1px;
    background: ${({ theme }) => theme.colors.secondary};
    opacity: 0.5;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.large};
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.secondary}15,
    ${({ theme }) => theme.colors.background}
  );
`;

const Header = styled.div`
  margin-bottom: 30px;
  text-align: center;
  padding: 60px 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 40px;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const Content = styled(motion.div)`
  width: 100%;
  max-width: 1000px;
  text-align: center;
  z-index: 1;
`;

const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  padding: ${({ theme }) => theme.spacing.large};
`;

const UserCard = styled(motion.div)`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xlarge};
  cursor: pointer;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const UserAvatar = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto ${({ theme }) => theme.spacing.large};
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
    z-index: 1;
    border: 2px solid white;
  }
`;

const UserName = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: ${({ theme }) => theme.spacing.medium};
  position: relative;
  font-family: ${({ theme }) => theme.fonts.primary};

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${UserCard}:hover & {
    &::after {
      opacity: 1;
    }
  }
`;

export default Login;
