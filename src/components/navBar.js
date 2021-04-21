const Navigation=()=>{
    return(
        <div className='Nav'>
            <div className='fillter'>
                <div class="ui floating labeled icon dropdown button">
                    <i class="filter icon"></i>
                    <span class="text">Filter</span>
                    <div class="menu">
                         <div class="header">
                             <i class="tags icon"></i>
                                Filter by tag
                        </div>
                        <div class="divider"></div>
                        <div class="item">
                            <i class="attention icon"></i>
                            Important
                        </div>
                        <div class="item">
                            <i class="comment icon"></i>
                            Announcement
                        </div>
                        <div class="item">
                            <i class="conversation icon"></i>
                            Discussion
                        </div>
                    </div>
                </div>
            </div>
            <div className='search'>
                <div class="ui icon input">
                    <input type="text" placeholder="Search..."/>
                    <i class="search icon"></i>
                </div>
            </div>
        </div>
    )
}

export default Navigation;