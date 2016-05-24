this.dym = this.dym || {};
(function (){
    var main ={
        init:function(){
            this.initPage2();
        },
        initPage2:function(){
            var cur = this;
            $(".page2Nav").click(function(){
                var id = $(this).index();
                cur.showPage2Sub(id);
            });
            $(".page2Nav").eq(0).click();
            //上升行情
            $("#s_s1, #s_s2, #s_s3").keyup(function(){
                cur.countSub1();
            });
            //上下跌行情
            $("#x_s1, #x_s2, #x_s3").keyup(function(){
                cur.countSub2();
            });
        },
        showPage2Sub:function(id){
            $(".page2_sub").hide();
            $(".page2_sub").eq(id).show();
        },
        countSub1:function(){
            if($("#s_s1").val() =="" || $("#s_s2").val() ==""){
                $(".page2_sub1 .p_1").text("--.--");
                $(".page2_sub1 .p_2").text("--.--");
                $(".page2_sub1 .p_3").text("--.--");
            }else{
                var s1 = Number( $("#s_s1").val());
                var s2 = Number( $("#s_s2").val() );
                var p1 = s2 / Math.sqrt( Math.sqrt( s2/s1 ) );
                var p2 = s2 / Math.sqrt( s2/s1 );
                var p3 = s2 / ( Math.sqrt( Math.sqrt( s2/s1 ) )+Math.sqrt( s2/s1 )-1 );
                $(".page2_sub1 .p_1").text(p1.toFixed(2));
                $(".page2_sub1 .p_2").text(p2.toFixed(2));
                $(".page2_sub1 .p_3").text(p3.toFixed(2));
            }

            //
            if($("#s_s3").val() ==""){
                $(".page2_sub1 .p_4").text("--.--");
                $(".page2_sub1 .p_5").text("--.--");
                $(".page2_sub1 .p_6").text("--.--");
            }else{
                var s3 = Number( $("#s_s3").val() );
                var p4 = s3 + ( s2-s1 )*0.5;
                var p5 = s3 + ( s2-s1 )*0.618;
                var p6 = s3 + ( s2-s1 )*0.809;
                $(".page2_sub1 .p_4").text(p4.toFixed(2));
                $(".page2_sub1 .p_5").text(p5.toFixed(2));
                $(".page2_sub1 .p_6").text(p6.toFixed(2));
            }
        },
        countSub2:function(){
            if($("#x_s1").val() =="" || $("#x_s2").val() ==""){
                $(".page2_sub2 .p_1").text("--.--");
                $(".page2_sub2 .p_2").text("--.--");
                $(".page2_sub2 .p_3").text("--.--");
            }else{
                var s1 = Number( $("#x_s1").val());
                var s2 = Number( $("#x_s2").val() );
                var p1 = s2 / Math.sqrt( Math.sqrt( s2/s1 ) );
                var p2 = s2 / Math.sqrt( s2/s1 );
                var p3 = s2 / ( Math.sqrt( Math.sqrt( s2/s1 ) )+Math.sqrt( s2/s1 )-1 );
                $(".page2_sub2 .p_1").text(p1.toFixed(2));
                $(".page2_sub2 .p_2").text(p2.toFixed(2));
                $(".page2_sub2 .p_3").text(p3.toFixed(2));
            }

            //
            if($("#x_s3").val() ==""){
                $(".page2_sub2 .p_4").text("--.--");
                $(".page2_sub2 .p_5").text("--.--");
                $(".page2_sub2 .p_6").text("--.--");
            }else{
                var s3 = Number( $("#x_s3").val() );
                var p4 = s3 - ( s2-s1 )*0.5;
                var p5 = s3 - ( s2-s1 )*0.618;
                var p6 = s3 - ( s2-s1 )*0.809;
                $(".page2_sub2 .p_4").text(p4.toFixed(2));
                $(".page2_sub2 .p_5").text(p5.toFixed(2));
                $(".page2_sub2 .p_6").text(p6.toFixed(2));
            }
        }
    };
    dym.main = main;
})();

/*
 上升行情

 S1：低点

 S2：高点


 入场点1：四舍五入 高点 ÷ 求平方根 (求平方根 (高点 ÷ 低点)）

 入场点2：四舍五入 高点 ÷ 求平方根 (高点 ÷ 低点)

 入场点3：四舍五入 高点 ÷ (求平方根 (求平方根 (高点 ÷ 低点)) ＋ 求平方根 (高点 ÷ 低点) － 1)

 S3：实际回调点

 目标点1：四舍五入 S3 ＋ （S2 － S1) × 0.5

 目标点2：四舍五入 S3 ＋ （S2 － S1) × 0.618

 目标点3：四舍五入 S3 ＋ （S2 － S1) × 0.809

 --------------------------------------------------------------------------------------------------------------

 下跌行情

 S1：高点

 S2：低点


 入场点1：四舍五入 低点 ÷ 求平方根 (求平方根 (低点 ÷ 高点))

 入场点2：四舍五入 低点 ÷ 求平方根 (低点 ÷ 高点)

 入场点3：四舍五入 低点 ÷ (求平方根 (求平方根 (低点 ÷ 高点)) ＋ 求平方根 (低点 ÷ 高点) － 1)

 S3：实际反弹点

 目标点1：四舍五入 S3 － (S1 － S2) × 0.5

 目标点2：四舍五入 S3 － (S1 － S2) × 0.618

 目标点1：四舍五入 S3 － (S1 － S2) × 0.809
 */