import Navigo from "navigo";
import Header from "./components/Header";
import footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import students from "./pages/students";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Students from "./pages/students";
import StudentDetail from "./pages/studentDetail";
import StudentsAdd from "./pages/studentsAdd";
import Products from "./pages/products";
import ProductDetail from "./pages/productDetail";
import ProductsAdd from "./pages/productAdd";
//khởi tạo đối tượng router

const router = new Navigo('/',{linksSelector: 'a'});

    const render = async (content, id) =>{
    // content sẽ là toàn bộ component
    // cần thêm tham số vào hàm này để truyền id cho những phần detail
    document.querySelector('#header').innerHTML = Header.render();
    //document.querySelector('#content').innerHTML = '<Button class="btn btn-primary">hhhhh</Button>';
    document.querySelector('#content').innerHTML = await content.render(id);
    document.querySelector('#footer').innerHTML =  footer.render();
    if (content.afterRender) {
        content.afterRender();
    }

}
router.on({
    '/': () => render(Home),
    '/about': () => render(About),
    '/news': () => render(News),
    '/students': () => render(Students),
    '/students/detail/add': () => render(StudentsAdd),
    '/students/:id': (data) =>  render(StudentDetail, data.data.id),
    '/products': () => render(Products),
    '/products/detail/add': () => render(ProductsAdd),
    '/products/:id': (data) =>  render(ProductDetail, data.data.id),
});
router.resolve();
//render();






//arrow function: const ten_ham=()=>{}
const arrowRender = () =>{
    document.querySelector('#header').innerHTML = '<div>content</div>';
    document.querySelector('#content').innerHTML = '<div>content</div>';
    document.querySelector('#footer').innerHTML = '<div>footer</div>';
}
function sum(a, b){
    return a+b;
};//cú pháo thông thường
const sum1 = (a,b)=>{
    return a+b;
};//arrow function có return
const sum2 = (a,b) => a+b;//nếu chỉ có return

const display = a => console.log(a);//nếu chỉ có 1 tham số
