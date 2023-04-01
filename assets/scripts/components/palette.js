export function palette(color1, color2)
{
    $("main").append(`
    <div class="palette"></div>
    `)
    $(".palette").css({
        background: `linear-gradient(${color1}, ${color2})`
    })
}