$(document).ready(function() {
	
	$('.reply').on('click', function(event) {
		event.preventDefault();
		if($(this).text() === 'Ответить') {

			$.each($('.reply'), function(i, val) {
				if($(val).text() === 'Отмена') $(val).click();
			});



			$(this).after('<form action="#" class="comment-form clearfix" method="post">\
					<input type="text" name="name" placeholder="Представьтесь, пожалуйста">\
					<textarea name="message" placeholder="Введите текст сообщения"></textarea>\
					<input type="submit" value="Добавить комментарий">\
				</form>');
			$(this).text('Отмена');
		}
		else {
			$(this).next().remove();
			$(this).text('Ответить');		
		}
	});
});