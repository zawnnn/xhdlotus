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
    brandList.innerHTML = '<option value=""></option>';
    
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
    restaurantList.innerHTML = '<option value=""></option>';

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
        document.getElementById('nhname').textContent = `${info['nh']}`;
        document.getElementById('taxNumber').textContent = `${info['tax']}`;
        document.getElementById('name').textContent = `${info['nameres']}`;
        document.getElementById('address').textContent = `${info['addressres']}`;
        document.getElementById('note').textContent = `${info['notes']}`;
    }
}

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copyButton');
    copyButton.addEventListener('click', function() {
        // Lấy các phần tử thông tin
        const nhname = document.getElementById('nhname').textContent;
        const taxNumber = document.getElementById('taxNumber').textContent;
        const name = document.getElementById('name').textContent;
        const address = document.getElementById('address').textContent;
        const note = document.getElementById('note').textContent;
        

        // Tạo một vùng tạm thời để sao chép
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = `Mã số thuế: ${taxNumber}\nTên đơn vị: ${name}\nĐịa chỉ: ${address}\nTên người mua hàng: ${nhname}\nGhi chú: ${note}`;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        // Thông báo sao chép thành công (tùy chọn)
        // Hiển thị thông báo thành công
        document.getElementById('copy-success').style.display = 'inline';

    // Ẩn thông báo sau 2 giây
        setTimeout(function() {
            document.getElementById('copy-success').style.display = 'none';
        }, 1000);
        //alert('Thông tin đã được sao chép vào clipboard!');
    });
});

//taxNumber
document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('taxNumber');
    copyButton.addEventListener('click', function() {
        // Lấy các phần tử thông tin
        const taxNumber = document.getElementById('taxNumber').textContent;

        // Tạo một vùng tạm thời để sao chép
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = `${taxNumber}\n`;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        // Thông báo sao chép thành công (tùy chọn)
        // Hiển thị thông báo thành công
        document.getElementById('copy-success').style.display = 'inline';

    // Ẩn thông báo sau 2 giây
        setTimeout(function() {
            document.getElementById('copy-success').style.display = 'none';
        }, 1000);
        //alert('Thông tin đã được sao chép vào clipboard!');
    });
});

//name
document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('name');
    copyButton.addEventListener('click', function() {
        // Lấy các phần tử thông tin
        const taxNumber = document.getElementById('name').textContent;

        // Tạo một vùng tạm thời để sao chép
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = `${taxNumber}\n`;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        // Thông báo sao chép thành công (tùy chọn)
        // Hiển thị thông báo thành công
        document.getElementById('copy-success').style.display = 'inline';

    // Ẩn thông báo sau 2 giây
        setTimeout(function() {
            document.getElementById('copy-success').style.display = 'none';
        }, 1000);
        //alert('Thông tin đã được sao chép vào clipboard!');
    });
});

//address
document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('address');
    copyButton.addEventListener('click', function() {
        // Lấy các phần tử thông tin
        const taxNumber = document.getElementById('address').textContent;

        // Tạo một vùng tạm thời để sao chép
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = `${taxNumber}\n`;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        // Thông báo sao chép thành công (tùy chọn)
        // Hiển thị thông báo thành công
        document.getElementById('copy-success').style.display = 'inline';

    // Ẩn thông báo sau 2 giây
        setTimeout(function() {
            document.getElementById('copy-success').style.display = 'none';
        }, 1000);
        //alert('Thông tin đã được sao chép vào clipboard!');
    });
});

//nhname
document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('nhname');
    copyButton.addEventListener('click', function() {
        // Lấy các phần tử thông tin
        const taxNumber = document.getElementById('nhname').textContent;

        // Tạo một vùng tạm thời để sao chép
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = `${taxNumber}\n`;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        // Thông báo sao chép thành công (tùy chọn)
        // Hiển thị thông báo thành công
        document.getElementById('copy-success').style.display = 'inline';

    // Ẩn thông báo sau 2 giây
        setTimeout(function() {
            document.getElementById('copy-success').style.display = 'none';
        }, 1000);
        //alert('Thông tin đã được sao chép vào clipboard!');
    });
});


function createSakura() {
    const sakura = document.createElement('div');
    sakura.classList.add('sakura');
    sakura.style.left = Math.random() * 100 + 'vw'; // Vị trí ngẫu nhiên ngang
    sakura.style.animationDuration = Math.random() * 2 + 5 + 's'; // Thời gian rơi
    sakura.style.opacity = Math.random();
    sakura.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.getElementById('sakura-container').appendChild(sakura);

    // Sau một khoảng thời gian thì loại bỏ hoa rơi
    setTimeout(() => {
        sakura.remove();
    }, 10000); // Thời gian tồn tại của hoa
}

function startSakuraRain() {
    // Tạo hoa mỗi 300ms
    const sakuraInterval = setInterval(createSakura, 100);

    // Dừng tạo hoa sau 3-4 giây
    setTimeout(() => {
        clearInterval(sakuraInterval);
    }, 3000); // Dừng tạo hoa sau 3.5 giây
}

// Gắn sự kiện click cho nút
document.getElementById('nhname').addEventListener('click', startSakuraRain);
document.getElementById('taxNumber').addEventListener('click', startSakuraRain);
document.getElementById('name').addEventListener('click', startSakuraRain);
document.getElementById('address').addEventListener('click', startSakuraRain);

// Tạo hoa rơi sau mỗi khoảng thời gian ngẫu nhiên
//setInterval(createSakura, 300);
