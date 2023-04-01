export function inputs()
{
    let content = $(`
        <div class="inputs">
            <div class="dir">
                <label for="direction">Direction:</label>
                <select id="direction">
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                    <option value="top left">Top Left</option>
                    <option value="top right">Top Right</option>
                    <option value="bottom left">Bottom Left</option>
                    <option value="bottom right">Bottom Right</option>
                </select>
            </div>
            <div class="colors">
                <input type="text" class="num" placeholder="Number Of Colors">
                <div class="palettes"></div>
            </div>
        </div>
    `)
    $("main").append(content)
    $(".num").on('input', function ()
    {
        $(".palettes").empty()
        if (isNaN($(this).val()))
        {
            $(".palettes").append(`
                <h5>Not a number</h5>
            `)
            return
        } else if ($(this).val() > 4)
        {
            $(".palettes").append(`
                <h5>Greater than 4</h5>
            `)
            return
        } else if ($(this).val() == 1)
        {
            $(".palettes").append(`
                <h5>1 is too small</h5>
            `)
            return
        }
        for (let i = 0; i < $(this).val(); i++)
        {
            $(".palettes").append(`
                <input type="color" class="color color${i}" data-index="${i}">
            `)
        }
        let colors = []
        $(".color").each(function (i, el)
        {
            $(el).on("change", function ()
            {
                colors.push($(this).val())
                let dir = $("#direction").val()
                $(this).prop({ disabled: true })
                let color0 = colors[0]
                let color1 = colors[1]
                let color2 = colors[2]
                let color3 = colors[3]
                if (color0 !== undefined)
                {
                    $(".palette").css({
                        background: `${color0}`
                    })
                }
                if (color1 !== undefined)
                {
                    $(".palette").css({
                        background: `linear-gradient(to ${dir}, ${color0}, ${color1})`
                    })
                    $("#direction").on("change", function ()
                    {
                        dir = $(this).val()
                        $(".palette").css({
                            background: `linear-gradient(to ${dir}, ${color0}, ${color1})`
                        })
                    })
                }
                if (color2 !== undefined)
                {
                    $(".palette").css({
                        background: `linear-gradient(to ${dir}, ${color0}, ${color1}, ${color2})`
                    })
                    $("#direction").on("change", function ()
                    {
                        dir = $(this).val()
                        $(".palette").css({
                            background: `linear-gradient(to ${dir}, ${color0}, ${color1}, ${color2})`
                        })
                    })
                }
                if (color3 !== undefined)
                {
                    $(".palette").css({
                        background: `linear-gradient(to ${dir}, ${color0}, ${color1}, ${color2}, ${color3})`
                    })
                    $("#direction").on("change", function ()
                    {
                        dir = $(this).val()
                        $(".palette").css({
                            background: `linear-gradient(to ${dir}, ${color0}, ${color1}, ${color2}, ${color3})`
                        })
                    })
                }
            })
        })
    })
}

