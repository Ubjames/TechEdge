<?php
require_once "../../lib/connection.php";
include "../../lib/head.php";
include "../../lib/header.php";
include "../../lib/nav.php";
?>

        <div class="all-content-wrapper">
            <form action="" method="post" id="postForm">
                <h2>Add new post</h2>
                <div>
                    <input type="text" name="title" id="title" placeholder="Enter title here">
                </div>
                <div>
                    <textarea name="content" id="content"> </textarea>
                </div>
                <!-- <div class="action-button">
                    <button type="submit" form="">Publish</button>
                    <button type="submit">Save draft</button>
                </div> -->
            </form>
            <aside>
                <div class="publish">
                    <div class="pub-control" onclick="expandmoreOption()">
                        <p>Publish</p>
                        <span style='font-size:22px;'>&#9662;</span>
                    </div>
                    <div class="more-option">
                        <div class="action-button">
                            <input type="submit" form="postForm" value="Save Draft">
                            <input type="submit" form="postForm" value="Preview">
                        </div>
                        <div class="options">
                            <div class="status">
                                <i class="fa fa-key"></i>
                                <label for="">Status:<strong><span>Draft</span></strong></label>
                                <button id="edit">Edit</button>
                            </div>
                            <div class="status">
                                <i class="fa fa-eye"></i>
                                <label for="">Visibity:<strong><span>Public</span></strong></label>
                                <button id="edit">Edit</button>
                            </div>
                            <div class="status">
                                <i class="fa fa-calendar"></i>
                                <label for="">Publish:<strong><span>Immediately</span></strong></label>
                                <button id="edit">Edit</button>
                            </div>
                        </div>
                    </div>
                    <div class="post-method">
                        <input type="submit" form="postForm" value="Move to trash"> 
                        <input type="submit" form="postForm" value="Publish"> 
                    </div>
                </div>

            </aside>

        </div>

   
   
    <script src="https://cdn.ckeditor.com/ckeditor5/25.0.0/classic/ckeditor.js"></script>

    <script defer>
        ClassicEditor
    .create( document.querySelector( '#content' ), {
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
    } )
    .catch( error => {
        console.log( error );
        
    } );
    setTimeout(() => {
        let ck = document.querySelector('.ck-blurred')
        
        ck.style.height="400px";
    }, 1000);
    </script>


<?php
include('../../lib/footer.php');
?>