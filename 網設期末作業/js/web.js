
document.addEventListener("DOMContentLoaded", function () {
    const aside = document.querySelector(".aside");
    const gridContainer = document.querySelector(".grid-container");

    /*滑鼠滑動事件
      目的:將aside展開至default長度*/
    document.addEventListener("mousemove", function (e) {
        //當x寬<=10時觸發aside給予"open"屬性
        if (e.clientX <= 10) {
            aside.classList.add("open");
            gridContainer.style.gridTemplateColumns = "250px 1fr";
        }
    });
    
    /*滑鼠離開事件
      目的:將aside縮回*/
    aside.addEventListener("mouseleave", function () {
        //當滑鼠離開時觸發aside收回"open"屬性
        aside.classList.remove("open");
        gridContainer.style.gridTemplateColumns = "0 1fr";
    });
});