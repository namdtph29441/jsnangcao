import { deleteProduct, getProducts } from "../api/product";
import reRender from "../helpers/reRender";
const Product = {
    render: async () => { // đã đóng ngoặc nhọn phải có return ở trong
        // 1. fetch là phương thức dùng để lấy dữ liệu từ phía BE
        // 2. fetch trả về 1 Promise => sẽ có await ở trước fetch để chờ kq
        // 3.1. fetch nhận vào đường dẫn API endpoint của BE
        // const response1 = await fetch('https://6291d18dcd0c91932b6876da.mockapi.io/students');

        // 3.2 sử dụng axios đã được khởi tạo và sinh ra hàm getStudents
        const response = await getProducts ();
        // const data = response.data;
        const {data} = response;

        // 4. lần đợi fetch đầu tiên sẽ trả về obj Response
        // console.log('response',response1, response2.data);
        // 5. lần đợi tiếp theo là response trả dữ liệu về dạng json
        // const students = await response.json();
        // console.log('students', students);

        return `<div class="row">
        <div>
        <a class="btn btn-success" href="/products/detail/add" role="button">Thêm sản phẩm</a>
        </div>
            ${
                data.map((product) => (
                    `<div class="col-lg-4">
                        <div>ID: ${product.id}</div>
                        <div>Name: ${product.name}</div>
                        <div>Price: ${product.price}</div>
                        <div>Status: ${product.status}</div>
                        <a class="btn btn-info" href="/products/${product.id}" role="button">Xem chi tiết</a>
                        <a class="btn btn-danger" data-id="${product.id}" data-name="${product.name}" role="button">Xoá</a>

                        <br>
                    </div>`
                )).join('')
            }
        </div>`
    },
    afterRender: () => {
        // đây là nơi thực thi nghiệp vụ định nghĩa sự kiện xóa
        // 1. tìm toàn bộ nút xóa và thêm sự kiện click cho nó
        const deleteBtns = document.querySelectorAll('.btn-danger');
        deleteBtns.forEach((btn) => {
            const data = btn.dataset; // {id: '', name: ''} với id ~ data-id, name ~ data-name
            // addEventListener('tên sự kiện', khi sự kiện kích hoạt sẽ thực thi hàm)
            btn.addEventListener('click', async () => {
                const btnId = btn.dataset.id;
                // thực hiện xóa
                //console.log(btnId);
                await deleteProduct(btnId);
                // window.location.reload();
                await reRender('#content', Product);

            });
        });
    }
};





export default Product;