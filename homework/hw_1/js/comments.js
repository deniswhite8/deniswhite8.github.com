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

			$(this).next().hide();
			$(this).next().slideDown(400);

			$(this).text('Отмена');
			$(this).data("use", true);
		}
		else {
			var next = $(this).next();
			var th = $(this);
			$(this).next().slideUp(400, function() {
				next.remove();
				th.text('Ответить');
				th.data("use", false);
			});
			// $(this).text('Ответить');
			// $(this).data("use", false);
		}
	});

	$(document).on('submit', '.comment-form', function(event) {
		event.preventDefault();

		var ok = $(this).data("ok");
		var name = $(this).find("input[name='name']").val().trim();
		var mess = $(this).find("textarea[name='message']").val().trim();
		
		if(name === "" || mess === "") {
			if(!ok || ok === undefined) {
				$(this).append('<p class="warning">Пожалуйста, заполните все поля перед отправкой</p>');
				$(this).data("ok", true);
			}
			$(this).find('.warning').animate({'margin-left': '-10px'}, 100).animate({'margin-left': '-20px'}, 100)
									.animate({'margin-left': '-10px'}, 100).animate({'margin-left': '-20px'}, 100);
		}
		else {
			if(ok) {
				$(this).find('.warning').remove();
				$(this).data("ok", false);
			}
		}
	})
});