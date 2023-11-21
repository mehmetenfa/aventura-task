import {FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect, useRef } from "react";
import {
    CategoryAndSubCategory,
    CategoryAndSubCategoryItemProps,
    AllProducts,
    AllProductsItemProps,
    RelatedCategory
} from '../../types';
import {
    categoryAndSubCategoryFetchData,
    allProductsFetchData,
    relatedCategoryFetchData
} from "../../ApiService";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MainScreen() {
    const [categoryAndSubCategoryData, setCategoryAndSubCategoryData] = useState<CategoryAndSubCategory[]>([]);
    const [allProductsData, setAllProductsData] = useState<AllProducts[]>([]);
    // const [relatedCategoryData, setRelatedCategoryData] = useState<RelatedCategory[]>([]);
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
    const flatListRef = useRef<FlatList<CategoryAndSubCategory>>(null);
    // const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null);

    useEffect(() => {
        const categoryAndSubCategoryFetchDataFromApi = async () => {
            try {
                const apiResponse = await categoryAndSubCategoryFetchData();
                const preprocessedCategoryAndSubCategoryData = apiResponse.data.map((category) => {
                    // Bu trim islemi kategori ve alt kategoriler geldigi zaman bazilarinda marginTop veya marginBottom varmis gibi gozukuyordu style vererek cozemedim boyle bir cozum buldum
                    const trimmedName = category.name.trim();
                    const normalizedName = trimmedName.replace(/\s+/g, ' ');
                    return {
                        ...category,
                        name: normalizedName,
                    };
                });
                setCategoryAndSubCategoryData(preprocessedCategoryAndSubCategoryData);
            } catch (error) {
                console.error(error);
            }
        };

        categoryAndSubCategoryFetchDataFromApi();

        const allProductsFetchDataFromApi = async () => {
            try {
                const apiResponse = await allProductsFetchData();
                const preprocessedAllProductsData = apiResponse.data.map((products) => {
                    const trimmedName = products.name.trim();
                    const normalizedName = trimmedName.replace(/\s+/g, ' ');
                    return {
                        ...products,
                        name: normalizedName,
                    };
                });
                setAllProductsData(preprocessedAllProductsData);
            } catch (error) {
                console.error(error);
            }
        };

        allProductsFetchDataFromApi();

        // const relatedCategoryFetchDataFromApi = async () => {
        //     try {
        //         const apiResponse = await relatedCategoryFetchData();
        //         const preprocessedRelatedCategoryData = apiResponse.data.map((relatedCategory) => {
        //             const trimmedName = relatedCategory.name.trim();
        //             const normalizedName = trimmedName.replace(/\s+/g, ' ');
        //             return {
        //                 ...relatedCategory,
        //                 name: normalizedName,
        //             };
        //         });
        //         setRelatedCategoryData(preprocessedRelatedCategoryData);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        //
        // relatedCategoryFetchDataFromApi();
    }, [setCategoryAndSubCategoryData,setAllProductsData]);

    useEffect(() => {
        if (selectedItemIndex !== null && flatListRef.current) {
            flatListRef.current.scrollToIndex({
                index: selectedItemIndex,
                animated: true,
                viewPosition: 0.5,
            });
        }
    }, [selectedItemIndex]);

    // const handleProductItemClick = (index: number) => {
    //     setSelectedItemIndex(index === selectedItemIndex ? null : index);
    //     setExpandedRowIndex(index);
    // };

    const CategoryItem: React.FC<CategoryAndSubCategoryItemProps> = ({ item, index }) => {
        const isSelected = index === selectedItemIndex;
        return (
            <TouchableOpacity
                onPress={() => setSelectedItemIndex(index)}
                style={{
                    ...styles.categoryItemContainer,
                    ...isSelected ? styles.selectedItem : styles.noneSelectedItem
                }}
            >
                <FlatList
                    data={item.subCategories}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => (
                        <TouchableOpacity
                            style={styles.categoryItem}
                            key={index}
                        >
                            {/*<View style={styles.categoryItemImageContainer}>*/}
                            {/*    <Image*/}
                            {/*        style={styles.categoryItemImage}*/}
                            {/*        source={{ uri : item.imageUrl}}*/}
                            {/*    />*/}
                            {/*</View>*/}
                            <View style={styles.categoryItemNameContainer}>
                                <Text style={styles.categoryItemName}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.subCategoryContainer}
                        >
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </TouchableOpacity>
        );
    };

    const ProductsItem: React.FC<AllProductsItemProps> = ({ item, index}) => {
        // const isSelected = index === selectedItemIndex;
        return (
            <TouchableOpacity
                key={index}
                style={{
                    ...styles.productCard,
                    // ...(isSelected ? styles.selectedProductCard : null),
                }}
                // onPress={() => onClick(index)}
            >
                <View style={styles.productImageContainer}>
                    <Image source={{ uri: item.imageUrl }} width={50} height={50} />
                </View>
                <TouchableOpacity style={styles.productPlusIconContainer}>
                    <Icon name="plus" size={15} color="black" />
                </TouchableOpacity>
                <View style={styles.productNameContainer}>
                    <Text style={styles.productName}>{item.name}</Text>
                </View>
                <View style={styles.productPriceContainer}>
                    <Text style={styles.productPrice}>{item.unitPrice} ₺</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar />
            <View style={styles.headerContainer}>
                <View
                    style={{ width: '58%', alignItems: 'flex-end'}}
                >
                    <Text style={styles.headerText}>
                        Ürünler
                    </Text>
                </View>
                <TouchableOpacity
                    // onPress={() => navigation.navigate("BasketScreen")}
                    style={{ width: '42%', alignItems: 'flex-end' }}>
                    <Icon name="shopping-cart" size={30} color="black" style={{ marginRight: 20 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.categoryContainer}>
                <FlatList
                    ref={flatListRef}
                    horizontal={true}
                    data={categoryAndSubCategoryData}
                    bounces={false}
                    pagingEnabled={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <CategoryItem item={item} index={index} />
                    )}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.productContainer}>
                <FlatList
                    data={allProductsData}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    numColumns={3}
                    renderItem={({ item, index }) => (
                        <View style={styles.productCardContainer}>
                            <ProductsItem
                                item={item}
                                index={index}
                                // onClick={handleProductItemClick}
                                // isExpanded={expandedRowIndex === index}
                            />
                        </View>
                    )}
                />
            </View>
            {/*<View style={styles.relatedCategoryContainer}>*/}
            {/*    <FlatList*/}
            {/*        data={relatedCategoryData}*/}
            {/*        showsVerticalScrollIndicator={false}*/}
            {/*        bounces={false}*/}
            {/*        numColumns={3}*/}
            {/*        renderItem={({ item, index }) => (*/}
            {/*            <View style={styles.productCardContainer}>*/}
            {/*                <ProductsItem item={item} index={index} />*/}
            {/*            </View>*/}
            {/*        )}*/}
            {/*    />*/}
            {/*</View>*/}
        </SafeAreaView>
    );
}
