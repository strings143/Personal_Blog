//Project set button 
//jQuery
window.onload = function (){
    const project_img = document.querySelectorAll('.project_img');
    const project_btn=document.querySelectorAll(".project_btn");
    for(let i=0;i<project_img.length;i++){
        project_img[i].addEventListener("mouseenter", event => {
            project_btn[i].style.visibility="visible";

            //圖片需要設定模糊
        });
        project_img[i].addEventListener("mouseleave", event => {
            project_btn[i].style.visibility="hidden";
        });
    }
}

