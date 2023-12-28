$().ready(function () {
        $("#sliderButton").click(function(e){
                e.preventDefault()
               $('#sliderEkleContaineri').fadeIn();
                $('#kategoriEkleContaineri').fadeOut();
                 $('#tanitimEkleContaineri').fadeOut();
                  $('#referansEkleContaineri').fadeOut(); 
        })

        $("#kategoriButton").click(function(e){
                 e.preventDefault()
                 $('#kategoriEkleContaineri').fadeIn();
                $('#sliderEkleContaineri').fadeOut();   
                 $('#tanitimEkleContaineri').fadeOut();
                  $('#referansEkleContaineri').fadeOut(); 
        })

        $("#tanitimEkleButton").click(function(e){
                 
                 e.preventDefault()
                $('#sliderEkleContaineri').fadeOut();
                $('#kategoriEkleContaineri').fadeOut();
                $('#tanitimEkleContaineri').fadeIn();
                 $('#referansEkleContaineri').fadeOut();  
        })

         $("#referansEkleButton").click(function(e){
                e.preventDefault()
                $('#sliderEkleContaineri').fadeOut();
                $('#kategoriEkleContaineri').fadeOut();
                $('#tanitimEkleContaineri').fadeOut();
               $('#referansEkleContaineri').fadeIn();  
        })

        $('body').on("click",".veri",function(e){
         e.preventDefault()
                 const mybilgi = $(this).attr("id"); //attr ile istenilen özelligi al   
                        $.ajax({
                                type: 'POST',
                                url:'yonetim/veriler.php',
                                data:{'mybilgi':mybilgi}, // id bilgisini gönder
                                success:function(myresp){
                                        $('#newDataTest').html(myresp) //dönen veriyi bas
                                      
                                }
                        })                                
        })


        $("#sliderEkleForm").on("submit",function(e){
                e.preventDefault()
        
        const form_data = new FormData(this) //Formu Al
        $.ajax({    //Ajaxı Başlat
                type:"post",
                url:"../database.php", //form verilerini databaseye yolla 
                data:form_data,
                dataType:"JSON",
                processData:false,
                contentType:false,
                success:function(response){
                         $("#basariliAlan").fadeIn(100).text(response.output).fadeOut(3000);
                       $('#sliderListCont').load("sliderList.php");
                }
        })
        })

        $('body').on("click",".sil",function(){
                
                 $('#sliderListCont').load("sliderList.php");
                  const idBilgi = $(this).attr("id")
                  const value= $(this).attr("value")
                  console.log(value)
                //console.log(imgData)
                //console.log(idBilgi)
                $.ajax({
                        type:"POST", //idleri databaseye poslta
                        url:"../database.php",
                        data:{
                        'idBilgi':idBilgi,
                        'value':value
                       
                        },
                        succes:function(response){
                            
                        }
                })
         })
         

        $("#kategoriEkleForm").on("submit",function(e){
        e.preventDefault();
        const form_data = new FormData(this) //Formu Al
        $.ajax({    //Ajaxı Başlat
                type:"post",
                url:"../database.php", //form verilerini databaseye yolla 
                data:form_data,
                dataType:"JSON",
                processData:false,
                contentType:false,
                success:function(response){
                         $("#basariliAlan").fadeIn(100).text(response.output).fadeOut(3000);
                        $('#kategoriEkleContaineri').load("kategoriEkle.php")
                }
        })
})

               $('body').on("click",".kategoriSil",function(e){
                e.preventDefault()
                const kateno = $(this).attr("id")
                const kateval = $(this).attr("value")
                console.log(kateno)
                $.ajax({
                        type:"POST", //my idid yolla databaseye post olarak
                        url:"../database.php",
                        data:{'kateno':kateno},
                        succes:function(response){
                                
                        }
                })
         })


        $("#tanitimEklemeForm").on("submit",function(e){
        e.preventDefault();
        $('#tanitimEkleContaineri').load("tanitimEkle.php")
      
        const form_data = new FormData(this) //Formu Al
        $.ajax({    //Ajaxı Başlat
                type:"post",
                url:"../database.php", //form verilerini databaseye yolla 
                data:form_data,
                dataType:"JSON",
                processData:false,
                contentType:false,
                success:function(response){
                         $("#basariliAlan").fadeIn(100).text(response.output).fadeOut(3000);
                         $('#tanitimEkleContaineri').load("tanitimEkle.php")
                        
                }
        })
})

$('body').on("click",".promotionDelete",function(e){
        e.preventDefault()
          $('#tanitimEkleContaineri').load("tanitimEkle.php")
        const promotionİd = $(this).attr("id")
        const promotionVal = $(this).attr("value")
        console.log(promotionİd)
        $.ajax({
                type:"POST",
                url:"../database.php",
                data:{
                'promotionİd':promotionİd,
                'promotionVal':promotionVal
                },
                succes:function(response){
                        $('#tanitimEkleContaineri').load("tanitimEkle.php")
                }
        })
})





$("#icerikEkleForm").on("submit",function(e){
  e.preventDefault();

        const form_data = new FormData(this) //Formu Al
        $.ajax({    //Ajaxı Başlat
                type:"post",
                url:"../database.php", //form verilerini databaseye yolla 
                data:form_data,
                dataType:"JSON",
                processData:false,
                contentType:false,
                success:function(response){
                        
                        
                }
        })
})


        $("#referansEklemeForm").on("submit",function(e){
        e.preventDefault();
        $("#referansEkleContaineri").load("referansEkle.php")
        const form_data = new FormData(this) //Formu Al
        e.preventDefault()
        $.ajax({    //Ajaxı Başlat
                type:"post",
                url:"../database.php", //form verilerini databaseye yolla 
                data:form_data,
                dataType:"JSON",
                processData:false,
                contentType:false,
                success:function(response){
                         $("#basariliAlan2").fadeIn(100).text(response.output).fadeOut(3000);
                         
                }
        })
})

  $('body').on("click",".deleteReferences",function(e){
        e.preventDefault()
       $("#referansEkleContaineri").load("referansEkle.php")
        const referenceİd = $(this).attr("id")
        console.log(referenceİd)
        const referenceVal = $(this).attr("value")
   
        $.ajax({
                type:"POST",
                url:"../database.php",
                data:{
                'referenceİd':referenceİd,
                'referenceVal':referenceVal
                },
                succes:function(response){
                        $("#referansEkleContaineri").load("referansEkle.php")
                }
        })
})





})