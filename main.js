function toggleDetail(e){
    const target =$(e.target)

    // dibawah kode untuk merubah kata more info menjadi less info setelah diklik (tapi less info doang ini)
    // $(target).html("Less Info").addClass("active") pada sesi 2

    // dibawah untuk merubah kata menjadi more info saat diklik dan mengembalikannya menjadi less info
    if($(target).hasClass("active")){
        $(target).html("More Info").removeClass("active")
    } else{
        $(target).html("Less Info").addClass("active")
    }

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()

}

