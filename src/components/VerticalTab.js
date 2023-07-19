import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import PhoneTabletsContent from './PhoneTabletsContent';
import GroceryContent from './GroceryContent';
import GardenOutdoorsContent from './GardenOutdoorsContent';
import HealthBeutyContent from './HealthBeautyContent';
import ElectronicsContent from './ElectronicsContent';
import ComputingContent from './ComputingContent';
import FashionContent from './FashionContent';
import SportingGoodsContent from './SportingGoodsContent';
import BabyProductsContent from './BabyProductsContent';
import GamingContent from './GamingContent';
import AutomobileContent from './AutomobileContent';
import BooksMoviesMusicContent from './BooksMoviesMusicContent';
import ToysGamesContent from './ToysGamesContent';

const VerticalTab = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleCategoryPress = (category) => {
      setSelectedCategory(category);
    };
  
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.verticalContainer}>
            <TouchableOpacity onPress={() => handleCategoryPress('Grocery')}>
              <Text style={styles.verticalText}>Grocery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('Phone & Tablets')}>
              <Text style={styles.verticalText}>Phone & Tablets</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('Health & Beauty')}>
              <Text style={styles.verticalText}>Health & Beauty</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('Electronics')}>
              <Text style={styles.verticalText}>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('Computing')}>
              <Text style={styles.verticalText}>Computing</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('Fashion')}>
              <Text style={styles.verticalText}>Fashion</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('Sporting Goods')}>
              <Text style={styles.verticalText}>Sporting Goods</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('Baby Products')}>
              <Text style={styles.verticalText}>Baby Products</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('Gaming')}>
              <Text style={styles.verticalText}>Gaming</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('Automobile')}>
              <Text style={styles.verticalText}>Automobile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('Books, Movies & Music')}>
              <Text style={styles.verticalText}>Books, Movies & Music</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('Toys & Games')}>
              <Text style={styles.verticalText}>Toys & Games</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCategoryPress('Garden & Outdoors')}>
              <Text style={styles.verticalText}>Garden & Outdoors</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomSpace} />
        </ScrollView>
        {selectedCategory && (
          <View style={styles.contentContainer}>
            {/* Render the corresponding component based on the selectedCategory */}
            {selectedCategory === 'Grocery' ? (
              <GroceryContent />
            ) : selectedCategory === 'Phone & Tablets' ? (
              <PhoneTabletsContent />
            ) : selectedCategory === 'Health & Beauty' ? (
              <HealthBeutyContent />
            ) : selectedCategory === 'Electronics' ? (
              <ElectronicsContent />
            ) : selectedCategory === 'Computing' ? (
              <ComputingContent />
            ) : selectedCategory === 'Fashion' ? (
              <FashionContent />
            ) : selectedCategory === 'Sporting Goods' ? (
              <SportingGoodsContent />
            ) : selectedCategory === 'Baby Products' ? (
              <BabyProductsContent />
            ) : selectedCategory === 'Gaming' ? (
              <GamingContent />
            ) : selectedCategory === 'Automobile' ? (
              <AutomobileContent />
            ) : selectedCategory === 'Books, Movies & Music' ? (
              <BooksMoviesMusicContent />
            ) : selectedCategory === 'Toys & Games' ? (
              <ToysGamesContent />
            ) : selectedCategory === 'Garden & Outdoors' ? (
              <GardenOutdoorsContent />
            ) : null}
          </View>
        )}
      </View>
    );
  };
  

const styles = {
    container: {
      flexDirection: 'row',
    },
    verticalContainer: {
      backgroundColor: '#ffff',
      paddingTop: 10,
      width: '75%',
      alignItems: 'center',
    },
    verticalText: {
      paddingBottom: 20,
      margin: 8,
      alignItems:'center',
    },
    bottomSpace: {
      height: 100,
    },
    contentContainer: {
      backgroundColor: '#ffff',
      flexDirection:'row',
      marginLeft: -10,
    },
  };

export default VerticalTab;
