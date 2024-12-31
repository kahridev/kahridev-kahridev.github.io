import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { cocktails, categories } from "../data/cocktails";

const CocktailList = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const navigate = useNavigate();

  const filteredCocktails = cocktails.filter(
    (cocktail) => cocktail.category === selectedCategory
  );

  return (
    <Container>
      <Header>
        <Title>Kokteyl Menüsü</Title>
        <CategoryScroll>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              selected={category === selectedCategory}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryScroll>
      </Header>

      <CocktailGrid>
        <AnimatePresence mode="wait">
          {filteredCocktails.map((cocktail) => (
            <CocktailCard
              key={cocktail.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/cocktail/${cocktail.id}`)}
            >
              <CocktailImage>
                <img src={cocktail.image} alt={cocktail.name} />
              </CocktailImage>
              <CocktailInfo>
                <CocktailName>{cocktail.name}</CocktailName>
                <CocktailPrice>{cocktail.price}</CocktailPrice>
              </CocktailInfo>
            </CocktailCard>
          ))}
        </AnimatePresence>
      </CocktailGrid>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.colors.background};
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.medium} 0;
  z-index: 10;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  font-size: 2rem;
`;

const CategoryScroll = styled.div`
  display: flex;
  overflow-x: auto;
  gap: ${({ theme }) => theme.spacing.medium};
  padding-bottom: ${({ theme }) => theme.spacing.medium};

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryButton = styled.button`
  background: ${({ selected, theme }) =>
    selected ? theme.colors.primary : "transparent"};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.background : theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.large}`};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 25px;
  white-space: nowrap;
  transition: all 0.3s ease;
`;

const CocktailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.large} 0;
`;

const CocktailCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #1a1a1a;
`;

const CocktailImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const CocktailInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
`;

const CocktailName = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const CocktailPrice = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: 0.8rem;
`;

export default CocktailList;
