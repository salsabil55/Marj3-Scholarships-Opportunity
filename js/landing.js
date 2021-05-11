// Start marj3 event
$('.marg3-event').click(function(e) {
            e.preventDefault();
        
            var $this = $(this);
        
            if ($this.next().hasClass('show')) {
                $this.next().removeClass('show');
                $this.next().slideUp(5);
            } else {
                $this.parent().parent().find('.mar-event .inners').removeClass('show');
                $this.parent().parent().find('.mar-event .inners').slideUp(5);
                $this.next().toggleClass('show');
                $this.next().slideToggle(5);
            }
 });