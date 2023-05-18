$(".color-code").text($("body").css("background-image"))
for (let i = 0; i < $(".num-of-colors").val(); i++)
{
    $(".color-pickers").append(`<input type="color" class="color-picker">`)
}
$(".num-of-colors").on('input', function ()
{
    let currentRange = $(this).val();
    let maxRange = $(this).prop("max");
    console.log(currentRange);
    let colorPicker = $(".color-pickers").children().length;
    if (colorPicker >= currentRange)
    {
        let num = colorPicker - currentRange
        console.log($(".color-pickers").children());
        for (let i = 0; i < num; i++)
        {
            colorPicker = $(".color-pickers").children().length;
            $(".color-pickers").children()[colorPicker - 1].remove()
        }
    } else if (colorPicker <= maxRange)
    {
        let colors = []
        for (let i = colorPicker; i < currentRange; i++)
        {
            colors.push(`<input type="color"  class="color-picker">`)
        }

        colors.forEach(el =>
        {
            $(".color-pickers").append(el)
        });
    }
    colorPickerChange()
})
let gradient;
function colorPickerChange()
{
    $(".color-picker").on('change', function ()
    {
        $(this).addClass("changed")
        let color = []
        $(".changed").each(function (i, el)
        {
            color.push($(el).val())
        })
        color = color.reduce((el, cur) => el + ", " + cur)
        let countChanged = $(".changed").length
        gradient = `linear-gradient(${color})`
        if ($(".direction").val() != "")
        {
            gradient = `linear-gradient(to ${$(".direction").val()}, ${color})`
        }
        if (countChanged < 2)
        {
            $("body").css({ "background": color })
            $(".color-code").text(color)
        }
        $(".color-code").text(gradient)
        // console.log(gradient);
        $("body").css({ "background": gradient })
    })
}
colorPickerChange()
$(".copy").click(function ()
{
    if ($(".color-code").text() == "none")
    {
        $(".copy-error").addClass("active")
        setTimeout(() => $(".copy-error").removeClass("active"), 1000);
        return
    }
    navigator.clipboard.writeText($(".color-code").text())
    $(".copied").addClass("active")
    setTimeout(() => $(".copied").removeClass("active"), 1000);
})
$(".direction").on('input', function ()
{
    let color = []
    $(".changed").each(function (i, el)
    {
        color.push($(el).val())
    })
    color = color.reduce((el, cur) => el + ", " + cur)
    gradient = `linear-gradient(${color})`
    if ($(".direction").val() != "")
    {
        gradient = `linear-gradient(to ${$(".direction").val()}, ${color})`
    }
    $(".color-code").text(gradient)
    $("body").css({ "background": gradient })
})