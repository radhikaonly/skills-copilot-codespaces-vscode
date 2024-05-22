function skillsMember() {
  var member = document.getElementById('member');
  var memberSkills = document.getElementById('member-skills');
  var memberSkillsList = document.getElementById('member-skills-list');
  var memberSkillsClose = document.getElementById('member-skills-close');

  memberSkillsClose.addEventListener('click', function() {
    memberSkills.style.display = 'none';
  });

  member.addEventListener('click', function() {
    memberSkills.style.display = 'block';
  });
}