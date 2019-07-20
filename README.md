# Drupal Install

1) `lando start`
2) `lando Install`
3) `lando devel`

# Import Configurations

1) Get current system.site uuid: `lando drush cget system.site uuid`
2) Catch the configuration sync system.site.yml uuid and copy it: `cat config/sync/system.site.yml|grep uuid`
3) Set system.site.yml uuid as system.site default uuid: `lando drush config-set "system.site" uuid "CONFIG SYNC UUID FROM STEP 2" -y`
4) Confirm that the current system.site uuid is the same as the config sync one: `lando drush cget system.site uuid`

# Sync the configuration

1) `lando drush cim -y`
> If you have errors about shortcuts: `Go to Home > Administration > Configuration > User interface > Shortcuts (admin/config/user-interface/shortcut), than in "List links" of "Default" and delete every shortcut`.
> If you have taxonomy errors remove all taxonomies and vocabularies
> If you have content errors remove all content from Drupal site
> Rerun the command: `lando drush cim -y`. It should work now.
2) Rerun `lando devel`
