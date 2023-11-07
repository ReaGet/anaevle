$(document).ready(function () {

    $('#rec374182200').hide()
    $('#rec374190795').hide()
    $('#rec374191953').hide()
    $('#rec374194498').hide()
    $('#rec374195113').hide()
    $('#rec374195688').hide()
    $('#rec374196308').hide()
    $('#rec376309458').hide()

    //let numberBlocks = ['#rec374190795', '#rec374191953', '#rec374194498', '#rec374195113', '#rec374195688', '#rec374196308', '#rec284172308', '#rec374182200', '#rec284707471', '#rec284708730', '#rec284709033', '#rec284709769', '#rec284709982', '#rec284710254', '#rec284710513', '#rec284710708', '#rec284711123', '#rec284711373', '#rec284711585', '#rec284711786', '#rec284712007', '#rec284719368', '#rec284721630', '#rec284722637', '#rec284723413', '#rec284723560', '#rec284723868', '#rec284724052', '#rec284724222', '#rec284724524', '#rec376309458'];

    let numberBlocks = ['#rec284707471', '#rec284708730', '#rec284709033', '#rec284709769', '#rec284709982',
        '#rec284710254', '#rec284710513', '#rec284710708', '#rec284711123', '#rec284711373', '#rec284711585', '#rec284711786', '#rec284712007',
        '#rec284719368', '#rec284721630', '#rec284722637', '#rec284723413', '#rec284723560', '#rec284723868', '#rec284724052', '#rec284724222', '#rec284724524'
    ];


    for (let block of numberBlocks) {
        $(block).hide();
    }

    setTimeout(function () {
        let starBlock = $('#rec284167792');
        let calcInput = $('#rec284167791 [name="date"]')
        let calcButton = $('#rec284167791 .t-submit');
        calcButton.replaceWith($('<div class="t-submit" style="color:#000;border:0px solid #7ec6fe;background-color:#7ec6fe;border-radius:10px;font-family:MyMontserrat;font-weight:600;font-size:18px;width:250px;height:68px;margin-left:auto;margin-right:auto;padding:0 15px;display:block;">' + calcButton.html() + '</div>'));
        calcButton = $('#rec284167791 .t-submit');
        let date = [];

        const getDate = function () {

            // Get input value and re-format it
            let dateInputValue = $('[name="date"]').val();
            date = dateInputValue.split('.');
            date = date.map(Number);
        }

        const hideNumberblocks = function () {
            for (let block of numberBlocks) {
                $(block).hide();
            }
        }

        const moreThanTwentyTwoCheck = function (value) {
            if (value > 22) {
                value = ('' + value).split('').map(Number);
                value = value.reduce((a, b) => a + b);
            }
            return value;
        }

        const showStar = function () {
            starBlock.show();
        }

        const toggleCalcButton = function () {
            calcButton.removeClass('disabled');
        }

        const calculation = function () {

            let firstWorkNumber,
                secondWorkNumber,
                thirdWorkNumber,
                fourthWorkNumber,
                fifthWorkNumber,
                sixthWorkNumber;

            let secondPairNumberfirstPairNumber,
                secondPairNubmber,
                thirdPairNumber,
                fourthPairNumber,
                fifthPairNumber;


            firstWorkNumber = date[0];
            secondWorkNumber = date[1];
            thirdWorkNumber = ('' + date[2]).split('').map(Number);
            thirdWorkNumber = thirdWorkNumber.reduce((a, b) => a + b);

            // Check if value is higher than 22
            firstWorkNumber = moreThanTwentyTwoCheck(firstWorkNumber);
            thirdWorkNumber = moreThanTwentyTwoCheck(thirdWorkNumber);

            fourthWorkNumber = firstWorkNumber + secondWorkNumber + thirdWorkNumber;
            fourthWorkNumber = moreThanTwentyTwoCheck(fourthWorkNumber);

            fifthWorkNumber = firstWorkNumber + secondWorkNumber + thirdWorkNumber + fourthWorkNumber;
            fifthWorkNumber = moreThanTwentyTwoCheck(fifthWorkNumber);

            sixthWorkNumber = firstWorkNumber + secondWorkNumber + thirdWorkNumber + fourthWorkNumber + fifthWorkNumber;
            sixthWorkNumber = moreThanTwentyTwoCheck(sixthWorkNumber);

            firstPairNumber = moreThanTwentyTwoCheck(firstWorkNumber + secondWorkNumber);
            secondPairNumber = moreThanTwentyTwoCheck(secondWorkNumber + thirdWorkNumber);
            thirdPairNumber = moreThanTwentyTwoCheck(thirdWorkNumber + fourthWorkNumber);
            fourthPairNumber = moreThanTwentyTwoCheck(fourthWorkNumber + fifthWorkNumber);
            fifthPairNumber = moreThanTwentyTwoCheck(fifthWorkNumber + firstWorkNumber);




            fillStar = function () {
                let firstStarNumber = $('.star-number-one .tn-atom');
                let secondStarNumber = $('.star-number-two .tn-atom');
                let thirdStarNumber = $('.star-number-three .tn-atom');
                let fourthStarNumber = $('.star-number-four .tn-atom');
                let fifthStarNumber = $('.star-number-five .tn-atom');
                let sixthStarNumber = $('.star-number-six .tn-atom');

                let firstStarPairNumber = $('.star-pair-one .tn-atom');
                let secondStarPairNumber = $('.star-pair-two .tn-atom');
                let thirdStarPairNumber = $('.star-pair-three .tn-atom');
                let fourthStarPairNumber = $('.star-pair-four .tn-atom');
                let fifthStarPairNumber = $('.star-pair-five .tn-atom');

                console.log(firstWorkNumber + ' check')
                // Show block related to first work number
                console.log(numberBlocks[15] + ' check')
                $(numberBlocks[firstWorkNumber - 1]).show();

                console.log(moreThanTwentyTwoCheck(fifthPairNumber + firstWorkNumber))
                console.log(fifthPairNumber)
                console.log(firstWorkNumber)
                let starNumber2 = moreThanTwentyTwoCheck(fifthPairNumber + firstWorkNumber)
                let starNumber4 = moreThanTwentyTwoCheck(firstPairNumber + firstWorkNumber)
                let starNumber6 = moreThanTwentyTwoCheck(firstPairNumber + fifthPairNumber)
                let starNumber7 = moreThanTwentyTwoCheck(starNumber2 + starNumber4)
                let starNumber8 = moreThanTwentyTwoCheck(firstWorkNumber + starNumber6)

                $('.star-number-1 .tn-atom').text(fifthPairNumber)
                $('.star-number-3 .tn-atom').text(firstWorkNumber)
                $('.star-number-5 .tn-atom').text(firstPairNumber)

                $('.star-number-2 .tn-atom').text(starNumber2)
                $('.star-number-4 .tn-atom').text(starNumber4)
                $('.star-number-6 .tn-atom').text(starNumber6)
                $('.star-number-7 .tn-atom').text(starNumber7)
                $('.star-number-8 .tn-atom').text(starNumber8)


                let starNumber22 = moreThanTwentyTwoCheck(firstPairNumber + secondWorkNumber)
                let starNumber24 = moreThanTwentyTwoCheck(secondPairNumber + secondWorkNumber)
                let starNumber26 = moreThanTwentyTwoCheck(firstPairNumber + secondPairNumber)
                let starNumber27 = moreThanTwentyTwoCheck(starNumber22 + starNumber24)
                let starNumber28 = moreThanTwentyTwoCheck(secondWorkNumber + starNumber26)

                $('.star-number-2-1 .tn-atom').text(firstPairNumber)
                $('.star-number-2-3 .tn-atom').text(secondWorkNumber)
                $('.star-number-2-5 .tn-atom').text(secondPairNumber)


                $('.star-number-2-2 .tn-atom').text(starNumber22)
                $('.star-number-2-4 .tn-atom').text(starNumber24)
                $('.star-number-2-6 .tn-atom').text(starNumber26)
                $('.star-number-2-7 .tn-atom').text(starNumber27)
                $('.star-number-2-8 .tn-atom').text(starNumber28)



                let starNumber32 = moreThanTwentyTwoCheck(secondPairNumber + thirdWorkNumber)
                let starNumber34 = moreThanTwentyTwoCheck(thirdPairNumber + thirdWorkNumber)
                let starNumber36 = moreThanTwentyTwoCheck(secondPairNumber + thirdPairNumber)
                let starNumber37 = moreThanTwentyTwoCheck(starNumber32 + starNumber34)
                let starNumber38 = moreThanTwentyTwoCheck(thirdWorkNumber + starNumber36)



                $('.star-number-3-1 .tn-atom').text(secondPairNumber)
                $('.star-number-3-3 .tn-atom').text(thirdWorkNumber)
                $('.star-number-3-5 .tn-atom').text(thirdPairNumber)


                $('.star-number-3-2 .tn-atom').text(starNumber32)
                $('.star-number-3-4 .tn-atom').text(starNumber34)
                $('.star-number-3-6 .tn-atom').text(starNumber36)
                $('.star-number-3-7 .tn-atom').text(starNumber37)
                $('.star-number-3-8 .tn-atom').text(starNumber38)


                let starNumber42 = moreThanTwentyTwoCheck(thirdPairNumber + fourthWorkNumber)
                let starNumber44 = moreThanTwentyTwoCheck(fourthPairNumber + fourthWorkNumber)
                let starNumber46 = moreThanTwentyTwoCheck(thirdPairNumber + fourthPairNumber)
                let starNumber47 = moreThanTwentyTwoCheck(starNumber42 + starNumber44)
                let starNumber48 = moreThanTwentyTwoCheck(fourthWorkNumber + starNumber46)

                $('.star-number-4-1 .tn-atom').text(thirdPairNumber)
                $('.star-number-4-3 .tn-atom').text(fourthWorkNumber)
                $('.star-number-4-5 .tn-atom').text(fourthPairNumber)

                $('.star-number-4-2 .tn-atom').text(starNumber42)
                $('.star-number-4-4 .tn-atom').text(starNumber44)
                $('.star-number-4-6 .tn-atom').text(starNumber46)
                $('.star-number-4-7 .tn-atom').text(starNumber47)
                $('.star-number-4-8 .tn-atom').text(starNumber48)




                let starNumber52 = moreThanTwentyTwoCheck(fourthPairNumber + fifthWorkNumber)
                let starNumber54 = moreThanTwentyTwoCheck(fifthPairNumber + fifthWorkNumber)
                let starNumber56 = moreThanTwentyTwoCheck(fourthPairNumber + fifthPairNumber)
                let starNumber57 = moreThanTwentyTwoCheck(starNumber52 + starNumber54)
                let starNumber58 = moreThanTwentyTwoCheck(fifthWorkNumber + starNumber56)



                $('.star-number-5-1 .tn-atom').text(fourthPairNumber)
                $('.star-number-5-3 .tn-atom').text(fifthWorkNumber)
                $('.star-number-5-5 .tn-atom').text(fifthPairNumber)

                $('.star-number-5-2 .tn-atom').text(starNumber52)
                $('.star-number-5-4 .tn-atom').text(starNumber54)
                $('.star-number-5-6 .tn-atom').text(starNumber56)
                $('.star-number-5-7 .tn-atom').text(starNumber57)
                $('.star-number-5-8 .tn-atom').text(starNumber58)

                let starNumber61 = moreThanTwentyTwoCheck(fourthWorkNumber + fifthWorkNumber)
                $('.star-number-6-1 .tn-atom').text(starNumber61)

                let starNumber72 = moreThanTwentyTwoCheck(firstWorkNumber + firstPairNumber)
                let starNumber74 = moreThanTwentyTwoCheck(firstPairNumber + secondPairNumber)
                let starNumber76 = moreThanTwentyTwoCheck(secondPairNumber + thirdWorkNumber)

                $('.star-number-7-1 .tn-atom').text(firstWorkNumber)
                $('.star-number-7-3 .tn-atom').text(firstPairNumber)
                $('.star-number-7-5 .tn-atom').text(secondPairNumber)
                $('.star-number-7-7 .tn-atom').text(thirdWorkNumber)


                $('.star-number-7-2 .tn-atom').text(starNumber72)
                $('.star-number-7-4 .tn-atom').text(starNumber74)
                $('.star-number-7-6 .tn-atom').text(starNumber76)

                console.log('work ' + firstWorkNumber + ' ' + secondWorkNumber + ' ' + thirdWorkNumber + ' ' + fourthWorkNumber + ' ' + fifthWorkNumber)
                console.log('pair ' + firstPairNumber + ' ' + secondPairNumber + ' ' + thirdPairNumber + ' ' + fourthPairNumber + ' ' + fifthPairNumber)
                firstStarNumber.text(firstWorkNumber)
                secondStarNumber.text(secondWorkNumber)
                thirdStarNumber.text(thirdWorkNumber)
                fourthStarNumber.text(fourthWorkNumber)
                fifthStarNumber.text(fifthWorkNumber)
                sixthStarNumber.text(sixthWorkNumber)

                firstStarPairNumber.text(firstPairNumber);
                secondStarPairNumber.text(secondPairNumber);
                thirdStarPairNumber.text(thirdPairNumber);
                fourthStarPairNumber.text(fourthPairNumber);
                fifthStarPairNumber.text(fifthPairNumber);

                let starNumber81 = moreThanTwentyTwoCheck(firstWorkNumber + secondWorkNumber + thirdWorkNumber + fourthWorkNumber + fifthWorkNumber)
                let starNumber82 = moreThanTwentyTwoCheck(firstPairNumber + secondPairNumber + thirdPairNumber + fourthPairNumber + fifthPairNumber)
                let starNumber83 = moreThanTwentyTwoCheck(starNumber81 + starNumber82)

                $('.star-number-8-1 .tn-atom').text(starNumber81)
                $('.star-number-8-2 .tn-atom').text(starNumber82)
                $('.star-number-8-3 .tn-atom').text(starNumber83)


            }();
        }
        calcButton.attr('type', '');
        calcInput.on('change', toggleCalcButton);
        hideNumberblocks();

        calcButton.click(function () {
            hideNumberblocks();

            if (calcInput.val() != '') {
                getDate();
                showStar();
                calculation();
                calcButton.addClass('disabled');

                $('html,body').animate({
                    scrollTop: starBlock.offset().top
                }, 1500);

                setTimeout(() => {
                    $('#rec374182200').show()
                    $('#rec374190795').show()
                    $('#rec374191953').show()
                    $('#rec374194498').show()
                    $('#rec374195113').show()
                    $('#rec374195688').show()
                    $('#rec374196308').show()
                    $('#rec376309458').show()

                }, 300)
            }
        });
    }, 1500)
});