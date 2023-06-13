jQuery("body").on("click","#ButtConv",function(){


    const year = jQuery("#year").val();
    const month = jQuery("#month").val();
    const day = jQuery("#day").val();

    var URL="https://www.hebcal.com/converter?cfg=json&gy="+year+"&gm="+month+"&gd="+day+"&g2h=1";
    
    jQuery.get(URL,function(data,status){

        jQuery("#yearG").val(data.hy);
        jQuery("#monthG").val(data.hm);
        jQuery("#dayG").val(data.hd);
    });

})


jQuery("body").on("click","#ButtConvG",function(){


    const yearG = jQuery("#yearG").val();
    const monthG = jQuery("#monthG").val();
    const dayG = jQuery("#dayG").val();

    var URL=" https://www.hebcal.com/converter?cfg=json&hy="+yearG+"&hm="+monthG+"&hd="+dayG+"&h2g=1";
  //  https://www.hebcal.com/converter?cfg=json&hy=5749&hm=Kislev&hd=25&h2g=1


    jQuery.get(URL,function(data,status){

        jQuery("#year").val(data.gy);
        jQuery("#month").val(data.gm);
        jQuery("#day").val(data.gd);
    });

    


})
