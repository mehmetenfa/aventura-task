import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff',
    },
    headerContainer: {
        height: 60,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#87C4FF',
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 20,
        color: '#164863',
        fontWeight: 'bold'
    },
    categoryContainer: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#d9d9d9',
        height: 100,
    },
    categoryItemContainer: {
        height: 100,
        width: 200,
        padding: 10,
        marginLeft: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryItem: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    categoryItemImageContainer: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 10
    },
    categoryItemImage: {
        width: "70%",
        height: "70%",
        resizeMode: "contain",
    },
    categoryItemNameContainer: {
        marginTop: 5
    },
    categoryItemName: {
      fontWeight: 'bold'
    },
    selectedItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    noneSelectedItem: {
        borderWidth: 0
    },
    subCategoryContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee',
        marginBottom: 5,
        padding: 2,
        borderRadius: 5
    },
    productContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    productCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    productCard: {
        backgroundColor: '#ececec',
        width: 100,
        height: 150,
        margin: 5,
        borderRadius: 10,
        justifyContent: 'flex-end'
    },
    selectedProductCard: {
        backgroundColor: '#ececec',
        width: 300,
        height: 150,
        margin: 5,
        borderRadius: 10,
        justifyContent: 'flex-end'
    },
    productImageContainer: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        marginTop: 5,
    },
    productPlusIconContainer: {
        position: 'absolute',
        top: 5,
        right: 5
    },
    productImage: {
        width: 50,
        height: 50,
        resizeMode: 'cover'
    },
    productNameContainer: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 30
    },
    productName: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    productPriceContainer: {
        margin: 5,
        marginBottom: 10,
        justifyContent: 'flex-end',
    },
    productPrice: {
        fontWeight: 'bold'
    },
});
