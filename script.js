function updateHtmlSizes(){

    const uVal =
        document.getElementById("htmlUserSlide").value;

    const pVal =
        document.getElementById("htmlPotSlide").value;

    const wVal =
        document.getElementById("htmlPotWSlide").value;

    /* تحديث الشخص */

    document.getElementById("htmlHumanSvg").style.height =
        uVal + "px";

    document.getElementById("htmlUserVal").innerText =
        uVal;

    /* تحديث المنتج */

    document.getElementById("htmlPotBar").style.height =
        pVal + "px";

    const visualWidth =
        wVal > 150 ? 150 : wVal;

    document.getElementById("htmlPotBar").style.width =
        visualWidth + "px";

    document.getElementById("htmlPotVal").innerText =
        pVal;

    document.getElementById("htmlPotWVal").innerText =
        wVal;
}

/* تشغيل أولي */

updateHtmlSizes();

/* الأحداث */

document.getElementById("htmlUserSlide")
    .addEventListener("input", updateHtmlSizes);


document.getElementById("htmlPotSlide")
    .addEventListener("input", updateHtmlSizes);


document.getElementById("htmlPotWSlide")
    .addEventListener("input", updateHtmlSizes);