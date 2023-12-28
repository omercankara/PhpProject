<?php
                require_once "../baglan.php";
                require_once  '../database.php';
?>        

<?php
        $verReferans = $baglanti->prepare("SELECT  * from referanslar ");
        $verReferans  -> execute();
?>

        <div id="basariliAlan2" class="col-md-6 alert alert-success"></div>
                <div class="col-md-9">
                        <form    enctype="multipart/form-data"  id="referansEklemeForm" class="form">
                                <div class="form-group">
                                  <label for="baslik"></label>
                                  <input type="text" name="baslik" id="baslik" class="form-control" placeholder="Referans Baslik" aria-describedby="helpId">
                                </div>
                                
                                <div class="form-group">
                                  <label for="resim"></label>
                                  <input id="resim" type="file" name="referansResim">
                                </div>
                                <button type="submit" class="btn btn-success">Gönder</button>
                                <input type="hidden" name="referansBas">
                        </form>
                </div>

            <div class="container">
                        <div class="row">
                                <div class="col-md-12">
                                        <table class="table">
                                                <thead>
                                                        <tr>
                                                                <th>Referans İsmi</th>
                                                                <th>Referans İmage</th>
                                                                <th>İşlem</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                <?php
                                                        while($referansBilgi = $verReferans ->fetch(PDO::FETCH_ASSOC)){
                                                        
                                                ?>
                                                        <tr>
                                                                <td><?php echo $referansBilgi['baslik']?></td>
                                                                <td  class=""><img class="img-fluid " style="width:150px;" src="../İmages/referansResim/<?php echo $referansBilgi["resim"] ?>"></td>  
                                                                <td><button class="btn btn-danger deleteReferences" value="<?php echo $referansBilgi['resim']?>" id=<?php echo $referansBilgi['id']?>>Sil</button></td>
        
                                                        </tr>
                                                        <?php } ?>  
                                                </tbody>        
                                        </table>
                                </div>
                        </div>
                </div>

        