/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("seeker_customfield").del();
  await knex("seeker_customfield").insert([
    {
      seeker_id: 1,
      customfield_title: "Person Project",
      customfield_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas tincidunt tortor, in tincidunt magna vehicula in. Nam fringilla eu metus vitae malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque at mi tellus. Cras mollis lacinia pretium. Donec et tellus quis lorem convallis rhoncus. Aenean orci turpis, volutpat iaculis sapien vehicula, ultrices venenatis est. Etiam at magna eget metus vehicula rutrum ut eu dolor. Morbi cursus blandit dolor sed condimentum. Ut volutpat vestibulum lectus eu finibus. Nam scelerisque erat quam, quis varius neque semper a.",
    },
    {
      seeker_id: 1,
      customfield_title: "Customfield Bouya",
      customfield_content:
        "Another crazy custom field filled with dummy text, enjoy",
    },
    {
      seeker_id: 1,
      customfield_title: "Campaigns lead",
      customfield_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas tincidunt tortor, in tincidunt magna vehicula in. Nam fringilla eu metus vitae malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque at mi tellus. Cras mollis lacinia pretium. Donec et tellus quis lorem convallis rhoncus. Aenean orci turpis, volutpat iaculis sapien vehicula, ultrices venenatis est. Etiam at magna eget metus vehicula rutrum ut eu dolor. Morbi cursus blandit dolor sed condimentum. Ut volutpat vestibulum lectus eu finibus. Nam scelerisque erat quam, quis varius neque semper a.",
    },
    {
      seeker_id: 3,
      customfield_title: "Sports Achievements",
      customfield_content: "National MMA championship 2022: Gold Medal",
    },
  ]);
};
