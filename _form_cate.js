$.each(categorized, function(cate, subcategories) {
	// サブカテゴリ名とメニュー用の入れ物 このdivタグにサブカテゴリ名とそのメニューがぶら下がる 全ての止まり木
	var div;
	$.each(subcategories, function(subcate, courses) {
		// サブカテゴリ名とメニュー用の入れ物 このdivタグにサブカテゴリ名とそのメニューがぶら下がる 全ての止まり木
		div =$('<div style="display:none">').attr('value', cate).addClass('reservation_menu_child');
		// サブカテゴリ名用の入れ物
		var h4 = $('<h4>');
		// h4タグにサブカテゴリ名とvalue値を追加
		$(h4).attr('value', subcate.split('_')[0]).text(subcate.split('_')[1]).addClass('h4 mt-sm-min-0 rsv-acdn');
		// サブカテゴリ名を追加
		div.append(h4);
		// コース用のliを格納するulタグ
		var ul = $('<ul>');
		// コース用liタグを作成する ここにサブカテゴリ配下のコースが追加される
		// サブカテゴリ配下のコースを追加していく
		$.each(courses, function(index, course) {
			// コース用liタグを作成する
			var li = $('<li>');
			// メニューと人数ボックスの入れ物
			var a = $('<a>');
			// まずaタグにコース名とvalue値を追加
			a.attr('value', course.split('_')[0]).text(course.split('_')[1]);
			// 次に人数セレクトボックスの作成 店舗の最小/最大人数
			var select = $('<select class="number" onchange="return false;"></select>');
			for (var i = Number(reservation_number_min); i <= Number(reservation_number_max); i++) {
				select.append($('<option></option>').val(i).text(i));
			}
			// aタグに人数セレクトボックスを追加
			a.append(select);
			// aタグをコース用liタグに追加
			li.append(a);
			// aタグと人数が入ったliタグをUlタグに追加
			ul.append(li);
		});

	    // サブカテゴリの全てのコースが追加されたら全ての止まり木に追加する
		div.append(ul);
	});
	// 1つのサブカテゴリが終わると大元の止まり木であるcategoryListへ追加する
	categoryList.append(div);
});
