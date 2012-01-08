/*!
 * jQuery nth plugin v0.9
 * https://github.com/terkel/jquery-nth
 *
 * Copyright (c) 2012 Takeru Suzuki, http://terkel.jp/
 * Licensed under the MIT license, http://www.opensource.org/licenses/MIT
 */
(function ($) {

    $.fn.nth = function (item) {
        return this.each(function () {
            var $this = $(this).addClass('indexed'),
                $item = item? $this.find(item): $this.children(),
                len = $item.length,
                n,
                i,
                j,
                c,
                r;
            for (i = 0; i < len; i++) {
                c = i + 1;
                n = [];
                n[n.length] = 'nth-' + c;
                for (j = 2; j <= len; j++) {
                    r = c % j;
                    if (r === 0) {
                        n[n.length] = 'nth-' + j + 'n';
                    } else {
                        n[n.length] = 'nth-' + j + 'n-plus-' + r;
                    }
                }
                $item.eq(i).addClass(n.join(' '));
            }
        });
    };

})(jQuery);