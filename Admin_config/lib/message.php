<div class="failed msg-wraper">
  <div class="msg-body springZoomIn">
    <i onclick="closeMsg()" class="fas fa-times-circle closeFailMsg"></i>
    <div class="msg-logo">
      <img src="admin_config/Assets/request_failed.png" alt="message request logo" />
    </div>
    <div class="msg-content">
      <h3 style="margin-bottom: 10px; color: rgb(66, 66, 66)">
        <strong>Failed</strong>
      </h3>
      <p style="color: rgb(110, 110, 110)">your request was not successful</p>
    </div>
  </div>
</div>

<div class="success msg-wraper">
  <div class="msg-body springZoomIn">
    <i onclick="closeMsg()" class="fas fa-times-circle closeSuccMsg"></i>
    <div class="msg-logo">
      <i class="fas fa-check-circle"></i>
    </div>
    <div class="msg-content">
      <h3 style="margin-bottom: 10px; color: rgb(66, 66, 66)">
        <strong>Succesful</strong>
      </h3>
      <p style="color: rgb(110, 110, 110)">Your request was successful</p>
    </div>
  </div>
</div>

<script>
  function closeMsg() {
    let msgs = document.querySelectorAll(".msg-wraper");
    msgs.forEach((msg) => {
      let msg_body = msg.firstElementChild;
        msg_body.classList.remove("springZoomIn");
        msg_body.classList.add("zoomOut");

      setTimeout(() => {
        msg.style.display = "none";
      }, 150);
    });
  }
</script>
