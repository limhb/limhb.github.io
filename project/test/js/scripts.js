var test = new Vue({
    el: '#test',
    data: {
        intro: '테스트를 시작 합니다',
        title: '샘플 테스트',
        currentIndex: 0,
        qna: [],
        result: ''
    },
    beforeMount: function() {
        this.insertQna('Q1. 숲과 바다중에 고르자면?', [숲, 바다 ], null);
        this.insertQna('Q2. 나는 몇명의 사람과 함께 여행하고 싶은가요?', [1,2,3,4,5], null);
    },
    mounted: function() {
        $('#intro').show();
        $('#main').hide();
        $('#result').hide();
    },
    methods: {
        insertQna: function(q, a, t) {
            var item = {
                q: q,
                a: a,
                r: '',
                t: t
            };
            this.qna.push(item);
        },
        start: function() {
            $('#intro').hide();
            $('#main').show();
            $('#result').hide();

            var self = this;
            setTimeout(function() {
                if(typeof self.qna[0].t != 'undefined' && self.qna[0].t != null) {
                    $('#q0a0').attr('type', self.qna[0].t);
                    $('#q0a0').focus();
                }
            }, 200);
        },
        next: function () {
            var self = this;
            if(this.currentIndex < this.qna.length-1) {
                this.currentIndex++;
                if(typeof this.qna[this.currentIndex].t != 'undefined' && this.qna[this.currentIndex].t != null) {
                    setTimeout(function() {
                        $('#q'+self.currentIndex+'a0').attr('type', self.qna[self.currentIndex].t);
                        $('#q'+self.currentIndex+'a0').focus();
                    }, 200);                    
                }
            } else {
                var check = true;
                for(var i=0; i < this.qna.length; i++) {
                    if(this.qna[i].r === '') {
                        check = false;
                    }
                }
                if(check) {
                    this.showResult();
                } else {
                    alert("아직 완료되지 않았습니다.");
                }
            }
        },
        prev: function () {
            var self = this;
            if(this.currentIndex > 0) {
                this.currentIndex--;
                if(typeof this.qna[this.currentIndex].t != 'undefined' && this.qna[this.currentIndex].t != null) {
                    setTimeout(function() {
                        $('#q'+self.currentIndex+'a0').attr('type', self.qna[self.currentIndex].t);
                        $('#q'+self.currentIndex+'a0').focus();
                    }, 200);                    
                }
            } else {
                alert('첫 질문입니다.');
            }
        },
        showResult: function() {
            
            $('#main').hide();
            $('#result').show();
        }
    }
});
// This file is intentionally blank
// Use this file to add JavaScript to your project