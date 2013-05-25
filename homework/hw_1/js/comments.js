$(document).ready(function() {
	
	$(document).on('click', '.reply', function(event) {
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

			var cur = new Date();
			var days = ['воскресение', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];


			var parent = $(this).parent();
			var thread = false;
			if(parent.attr('class') === 'comments-box') parent = parent.find('.comment-form');
			else thread = true;

			var h = cur.getHours(),
				m = cur.getMinutes(),
				d = cur.getDate(),
				mo = (cur.getMonth()+1);

			if(h < 9) h = '0'+h 
			if(m < 9) m = '0'+m 
			if(d < 9) d = '0'+d 
			if(mo < 9) mo = '0'+mo;



			parent.after((thread?'<div class="thread">':'') + '<div class="comment">\
				<p class="name"></p>\
				<p class="time">'+h + ':' + m + ', ' + days[cur.getDay()] + ', ' + d + "."+mo + "." + cur.getFullYear() +'</p>\
				<p class="message"></p>\
				<a href="#" class="reply">Ответить</a>\
			</div>'+(thread?'</div>':''));

			var msg = parent.next().find('.message');
			msg.text(mess);
			msg.html(msg.html().replace(/\n/g, '<br>'));
			parent.next().find('.name').text(mess);


			$(this).find("input[name='name']").val('');
			$(this).find("textarea[name='message']").val('')
			$(this).parent().find('> a.reply').click();
		}
	})
});