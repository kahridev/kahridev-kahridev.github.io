import { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { cocktails } from '../data/cocktails';
import { FaArrowLeft, FaMinus, FaPlus } from 'react-icons/fa';


import { motion, AnimatePresence } from 'framer-motion';

// ... geri kalan component kodu aynı

const CocktailDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isOrdering, setIsOrdering] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);



  const cocktail = cocktails.find(c => c.id === parseInt(id));
  
  if (!cocktail) {
    return <div>Kokteyl bulunamadı</div>;
  }

  const OrderSuccessPopup = ({ onClose }) => {
    return (
      <PopupOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <PopupContent
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.5 }}
        >
          <VideoContainer>
            <video
              autoPlay
              playsInline
            >
              <source src="/images/devamke.mp4" type="video/mp4" />
            </video>
          </VideoContainer>
          <PopupText>
            Siparişiniz başarıyla alındı!
          </PopupText>
          <PopupButton onClick={onClose}>Tamam</PopupButton>
        </PopupContent>
      </PopupOverlay>
    );
  };

  const OrderExistsPopup = ({ onClose, cocktail }) => {
    return (
      <PopupOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <PopupContent
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.5 }}
        >
          <PopupImage src="/images/nah.jpg" alt={cocktail.name} />
          <PopupText>
            Abartma amk :d
          </PopupText>
          <PopupButton onClick={onClose}>Tmm</PopupButton>
        </PopupContent>
      </PopupOverlay>
    );
  };

  const handleOrder = async () => {
    if (checkExistingOrder()) {
      setShowPopup(true);
      return;
    }

    setIsOrdering(true);
    
    const order = {
      cocktailId: cocktail.id,
      timestamp: new Date().toLocaleString(),
      cocktailName: cocktail.name,
      quantity: quantity,
      totalPrice: cocktail.price * quantity
    };
  
    try {
      await fetch('https://docs.google.com/spreadsheets/d/1uCOOdiXKHJAPktvu6VZJmeO7-_9Y2cq2vC0WDsPQWSw', {
        method: 'POST',
        body: JSON.stringify(order)
      });
  
      const currentOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      currentOrders.push(order);
      localStorage.setItem('orders', JSON.stringify(currentOrders));

      setShowSuccessPopup(true); // Başarı popup'ını göster

      // Popup kapandıktan sonra ana sayfaya yönlendir
      setTimeout(() => {
        navigate("/");
      }, 3000);
      
      // navigate('/');
    } catch (error) {
      console.error('Sipariş gönderilirken hata:', error);
      setIsOrdering(false);
    }
  };

  const checkExistingOrder = () => {
    const currentOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    return currentOrders.some(order => order.cocktailId === cocktail.id);
  };

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <FaArrowLeft /> Geri
      </BackButton>
      
      <ImageSection>
        <CocktailImage src={cocktail.image} alt={cocktail.name} />
      </ImageSection>
      
      <Content>
        <InfoSection>
          <Title>{cocktail.name}</Title>
          <Category>{cocktail.category}</Category>
          <Description>{cocktail.description}</Description>
          
          {cocktail.ingredients?.length > 0 && (
            <IngredientsTitle>İçindekiler</IngredientsTitle>
          )}
          <IngredientsList>
            {cocktail.ingredients?.map((ingredient, index) => (
              <Ingredient key={index}>{ingredient}</Ingredient>
            ))}
          </IngredientsList>
          
          {/* <Price>{cocktail.price} ₺</Price> */}
          
          <OrderSection>
            <QuantityControl>
              <QuantityButton 
                onClick={() => {
                  setQuantity(Math.max(1, quantity - 1))
                }}
                disabled={quantity <= 1}
              >
                <FaMinus />
              </QuantityButton>
              <QuantityDisplay>{quantity}</QuantityDisplay>
              <QuantityButton onClick={() => {
                if (quantity => 1) {
                  setShowPopup(true);
                  return;
                }
                setQuantity(quantity + 1)
              }}>
                <FaPlus />
              </QuantityButton>
            </QuantityControl>
            
            <AddToCartButton onClick={handleOrder}>
              Sipariş Ver
            </AddToCartButton>
          </OrderSection>
        </InfoSection>
      </Content>

      <AnimatePresence>
        {showPopup && (
          <OrderExistsPopup 
            onClose={() => setShowPopup(false)}
            cocktail={cocktail}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
      {showPopup && (
        <OrderExistsPopup 
          onClose={() => setShowPopup(false)}
          cocktail={cocktail}
        />
      )}
      {showSuccessPopup && (
        <OrderSuccessPopup 
          onClose={() => setShowSuccessPopup(false)}
        />
      )}
    </AnimatePresence>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`;

const BackButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 25px;
  backdrop-filter: blur(5px);
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.small};
  
  &:hover {
    background: white;
  }
`;

const ImageSection = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;
  margin-bottom: 40px;
`;

const CocktailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  z-index: 2;
`;

const InfoSection = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.large} 
                ${({ theme }) => theme.borderRadius.large} 0 0;
  margin-top: -40px;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

const Category = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.1rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: 30px;
`;

const IngredientsTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.headline};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 15px;
`;

const IngredientsList = styled.ul`
  list-style: none;
  margin-bottom: 30px;
`;

const Ingredient = styled.li`
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary}20;
`;

const Price = styled.div`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin-bottom: 30px;
`;

const OrderSection = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 25px;
  padding: 5px 15px;
`;

const QuantityButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 5px;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuantityDisplay = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  min-width: 30px;
  text-align: center;
`;

const AddToCartButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 25px;
  padding: 15px 40px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

// Styled components
const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const PopupContent = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  max-width: 400px;
  width: 100%;
  text-align: center;
  position: relative;
`;

const PopupImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
`;

const PopupText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  margin-bottom: 25px;
  line-height: 1.5;
`;

const PopupButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const VideoContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default CocktailDetail;