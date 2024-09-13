// script.js
let data = [];

document.addEventListener('DOMContentLoaded', function() {
    fetch('restaurants.csv') // Đường dẫn tới file CSV trong dự án
        .then(response => response.text())
        .then(csv => {
            Papa.parse(csv, {
                header: true,
                skipEmptyLines: true,
                complete: function(results) {
                    data = results.data;
                    populateBrands();
                },
                error: function(error) {
                    console.error("Error reading CSV file:", error);
                }
            });
        });
});

function populateBrands() {
    const brandList = document.getElementById('brandList');
    brandList.innerHTML = '<option value="">Chọn Nhãn hàng</option>';
    
    const brands = [...new Set(data.map(item => item['brand']))];
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandList.appendChild(option);
    });
}

function updateRestaurants() {
    const selectedBrand = document.getElementById('brandList').value;
    const restaurantList = document.getElementById('restaurantList');
    restaurantList.innerHTML = '<option value="">Chọn Nhà hàng</option>';

    const restaurants = data.filter(item => item['brand'] === selectedBrand).map(item => item['res']);
    restaurants.forEach(restaurant => {
        const option = document.createElement('option');
        option.value = restaurant;
        option.textContent = restaurant;
        restaurantList.appendChild(option);
    });
}

function showInfo() {
    const selectedRestaurant = document.getElementById('restaurantList').value;
    const info = data.find(item => item['res'] === selectedRestaurant);
    
    if (info) {
        document.getElementById('taxNumber').textContent = `Mã số thuế: ${info['tax']}`;
        document.getElementById('name').textContent = `Tên đơn vị: ${info['nameres']}`;
        document.getElementById('address').textContent = `Địa chỉ: ${info['addressres']}`;
    }
}

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copyButton');
    copyButton.addEventListener('click', function() {
        // Lấy các phần tử thông tin
        const taxNumber = document.getElementById('taxNumber').textContent;
        const name = document.getElementById('name').textContent;
        const address = document.getElementById('address').textContent;

        // Tạo một vùng tạm thời để sao chép
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = `${taxNumber}\n${name}\n${address}`;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        // Thông báo sao chép thành công (tùy chọn)
        //alert('Thông tin đã được sao chép vào clipboard!');
    });
});

