<div id="sidebar" class="open">
    <a id="icon">riuir</a>
    <ul id="menu">
        @foreach($menu as $item)
            <li <?php
                    if (ltrim($_SERVER["REQUEST_URI"], '/') === $item->link) {
                        echo "class='selected'";
                    }
                ?>>
                <i></i>
                <a href="{{ route($item->link) }}">{{ $item->name }}</a>
            </li>
        @endforeach
    </ul>
    <ul id="tool">
        <li>
            <i></i>
            <a href="">工具</a>
        </li>
    </ul>
</div>