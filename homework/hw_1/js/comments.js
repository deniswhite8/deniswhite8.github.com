$(document).ready(function() {
	
	$('.reply').on('click', function(event) {
		event.preventDefault();
		var use = $(this).data("use");
		if(use === false || use === undefined) {

			$.each($('.reply'), function(i, val) {
				if($(val).data("use") === true)
					$(val).click();
			});



			$(this).after('<form action="#" class="comment-form clearfix" method="post">\
					<input type="text" name="name" placeholder="Представьтесь, пожалуйста">\
					<textarea name="message" placeholder="Введите текст сообщения"></textarea>\
					<input type="submit" value="Добавить комментарий">\
				</form>');
			$(this).text('Отмена');
			$(this).data("use", true);
		}
		else {
			$(this).next().remove();
			$(this).text('Ответить');
			$(this).data("use", false);		
		}
	});

	$(document).on('submit', '.comment-form', function(event) {
		event.preventDefault();

		var ok = $(this).data("ok");

		
		if($(this).find("input[name='name']").val().trim() === "" || $(this).find("textarea[name='message']").val().trim() === "") {
			if(!ok || ok === undefined) {
				$(this).append('<p class="warning">Пожалуйста, заполните все поля перед отправкой</p>');
				$(this).data("ok", true);
			}
		}
		else {
			if(ok) {
				$(this).next().remove();
				$(this).data("ok", false);
			}
		}
	})
});