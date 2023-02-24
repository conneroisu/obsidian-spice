
<script>
    import Tabs from "./SimTabs.svelte";
    import Tab1 from "./AC-Analysis-Component.svelte";
    import Tab2 from "./Transient-Component.svelte";
    import Tab3 from "./DC-Sweep-Component.svelte";
let items = [
    {
        label: "AC Analysis",
        value: 1,
        component: Tab1,
        slabel: "ac",
    }, 
    {
        label: "Transient Analysis",
        value: 2,
        component: Tab2,
        slabel: "Trans",
    },
    {
        label: "DC Sweep",
        value: 3,
        component: Tab3,
        slabel: "DC"
    }
]
</script>

<Tabs {items} />
<h2>
		Now we can have expanded content like this
</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat recusandae est! Nesciunt consectetur, fuga voluptatem accusantium iste molestias aliquid!</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deleniti natus temporibus eius quam. Id ullam quaerat itaque dicta rem, molestiae adipisci corrupti blanditiis sunt eveniet. Vero illo labore eligendi? Nobis molestiae facere maxime repudiandae nemo veritatis quae earum velit.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos praesentium ut cupiditate earum error quidem aperiam quae, voluptates cumque. Incidunt, mollitia exercitationem harum tempora possimus sed impedit animi accusantium explicabo dolorum voluptatibus vero autem fugiat ratione dolore magni? Cum rerum quod doloribus culpa impedit quo quos quidem nostrum, libero aliquam nulla laudantium dolor possimus quaerat eum autem nihil sapiente magnam sit. Autem, sunt. Ipsa at, sint labore ipsam omnis, eligendi delectus numquam laborum hic est, deserunt minima repudiandae quaerat aut adipisci exercitationem perferendis animi. Quidem harum incidunt porro fugiat pariatur a placeat, architecto voluptatem, quos corporis voluptatum deserunt quibusdam animi sequi est labore magnam? Ad delectus debitis impedit inventore hic deleniti, temporibus facilis, expedita obcaecati adipisci eius ipsam earum?</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, quaerat. Nostrum officia aspernatur nemo iure accusantium consequuntur cupiditate esse atque blanditiis fuga perferendis modi explicabo voluptatum vitae unde, velit magni a molestiae magnam neque, distinctio, hic praesentium dolores optio. Beatae?</p>
  <blockquote>Some inspiring quotes are better than others, but this one is the best</blockquote>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum facere beatae commodi magnam molestiae non ad cum, sequi distinctio explicabo quaerat temporibus error ex esse incidunt doloribus ducimus earum excepturi et cupiditate corporis laudantium deleniti! Error libero natus incidunt quam recusandae amet non fugit tenetur, temporibus quis odit blanditiis nulla voluptatum voluptate rerum corporis pariatur eius. Numquam tenetur quam autem aspernatur officiis cupiditate odio rerum repellat alias nesciunt. Quae saepe corrupti est, vero ipsa odio nesciunt rerum ad ex.</p>
  <div class="split">
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatum dolore vel necessitatibus nulla sit, molestias quia nesciunt delectus maiores eum culpa porro, ducimus deserunt natus facere mollitia voluptatibus! Voluptatibus.</p>
      <br>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nisi laboriosam error fuga porro quisquam voluptatum enim similique provident nam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eum illo amet temporibus praesentium nemo harum, earum autem veritatis qui!</p>
    </div>
    <div>
    </div>
  </div>
  <div class="split">
    
    <div>
    </div>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatum dolore vel necessitatibus nulla sit, molestias quia nesciunt delectus maiores eum culpa porro, ducimus deserunt natus facere mollitia voluptatibus! Voluptatibus.</p>
      <br>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nisi laboriosam error fuga porro quisquam voluptatum enim similique provident nam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae id, rem libero consequuntur autem delectus cum ipsam ipsum eos eveniet.</p>
    </div>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eos praesentium ut cupiditate earum error quidem aperiam quae, voluptates cumque. Incidunt, mollitia exercitationem harum tempora possimus sed impedit animi accusantium explicabo dolorum voluptatibus vero autem fugiat ratione dolore magni? Cum rerum quod doloribus culpa impedit quo quos quidem nostrum, libero aliquam nulla laudantium dolor possimus quaerat eum autem nihil sapiente magnam sit. Autem, sunt. Ipsa at, sint labore ipsam omnis, eligendi delectus numquam laborum hic est, deserunt minima repudiandae quaerat aut adipisci exercitationem perferendis animi. Quidem harum incidunt porro fugiat pariatur a placeat, architecto voluptatem, quos corporis voluptatum deserunt quibusdam animi sequi est labore magnam? Ad delectus debitis impedit inventore hic deleniti, temporibus facilis, expedita obcaecati adipisci eius ipsam earum?</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, quaerat. Nostrum officia aspernatur nemo iure accusantium consequuntur cupiditate esse atque blanditiis fuga perferendis modi explicabo voluptatum vitae unde, velit magni a molestiae magnam neque, distinctio, hic praesentium dolores optio. Beatae?</p>

<style>
p {
  font-size: 17px;
}

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
img {
  border-radius: 1rem;
}
blockquote {
    font-size: 30px;
    color: #888;
    position: relative;
}

blockquote:before {content: "";position: absolute;left: -40px;top: 17%;height: 60px;width: 4px;background: #6878d7;}
</style>
