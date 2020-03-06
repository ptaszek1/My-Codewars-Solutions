function yourFutureCareer(){
	var career = Math.random();
    if (career <= 0.32) {
        return 'FrontEnd Developer';
    } else if (career <= 0.65 && career >= 0.32) {
        return 'BackEnd Developer';
    } else {
        return 'Full-Stack Developer';
    }
}