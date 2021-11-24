    <div class=" mt-6 fixed-bottom">
        <nav class="nav  bg-primary text-center">
            <a class="nav-link text-white col-3" aria-current="page" href="<?php print(constant('URL')); ?>" id="linkInicio">
                <ion-icon name="home-outline"></ion-icon>
            </a>
            <a class="nav-link text-white col-3" href="<?php print(constant('URL').'Practica1/' ); ?>" id="linkPractica1">
                <ion-icon name="game-controller-outline"></ion-icon>
            </a>
            <a class="nav-link text-white col-3" href="<?php print(constant('URL').'Practica2/'); ?>" id="linkPractica2">
                <ion-icon name="cart-outline"></ion-icon>
            </a>
            <a class="nav-link text-white col-3" href="<?php print(constant('URL').'Practica3/'); ?>" id="linkPractica3">
                <ion-icon name="id-card-outline"></ion-icon>
            </a>
        </nav>
    </div>
    <!-- iconos -->
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous">
    </script>
    <?php
        if($request != '/')
            print('<script src ="./app.js"></script>');
    ?>
    </body>
</html>
