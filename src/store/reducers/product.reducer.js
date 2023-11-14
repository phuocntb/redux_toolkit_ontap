
export function productReducer(state = {
    data: [
        {
            id: 1,
            name: "Product 1",
            price: 1000000,
            des: "abadamd amnda",
            avatar: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985"
        },
        {
            id: 2,
            name: "Product 2",
            price: 1000000,
            des: "abadamd amnda",
            avatar: "https://genk.mediacdn.vn/2020/1/6/2020-01-06002611-15782496352371648124996.jpg"
        },        {
            id: 3,
            name: "Product 3",
            price: 1000000,
            des: "abadamd amnda",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwW_e6wrgW0AHJ-bkC0l2E6KJF7vWKn6R-9A&usqp=CAU"
        }
    ]
}, action) {
    switch (action.type) {
        default: 
            return state;
    }
}