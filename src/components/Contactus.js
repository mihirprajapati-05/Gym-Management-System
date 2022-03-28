import React from 'react' 

const Contactus = () => {
  return (
    <div style={{marginTop:'100px'}}>
      <section class="mb-4 text-white">

        <h2 class="h1-responsive font-weight-bold text-center my-4" >Contact Us</h2>
        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
           a matter of hours to help you.</p>

        <hr className='' style={{ color:'#FFFFFF' ,marginLeft:'140px ' ,marginRight:'140px'}}/>    

        <div class="row mx-5">
            <div class="col-md-12 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" action="#" method="POST">

                    <div class="row mx-5">
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="name" name="name" class="form-control" />
                                <label for="name" class="">Enter Your Name</label>
                            </div>
                        </div>
    
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="email" name="email" class="form-control"/>
                                <label for="email" class="">Enter Your Email</label>
                            </div>
                        </div>
                    </div>

                    <div class="row mx-5">
                        <div class="col-md-12">
                            <div class="md-form">
                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                <label for="message">Enter Your Message</label>
                            </div>
                        </div>
                    </div>
                </form>

                <div class="text-center text-md-center">
                    <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                </div>
            </div>

        </div>
      </section>
    </div>
  )
}

export default Contactus;