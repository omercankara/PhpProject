<?php
        try{
                $baglanti = new PDO("mysql:host=localhost; dbname=mimar; charset=utf8","mimar","123123a");            
              
        }catch(Exception $e){
                echo $e-getMessage();
        }
?>