<?php

namespace Drupal\zebra_system\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class AdminSettingsForm.
 */
class AdminSettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'zebra_system.adminsettings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'admin_settings_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('zebra_system.adminsettings');
    $form['enable_zebra_system'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Enable Zebra System'),
      '#description' => $this->t('If checked zebra background will be enabled in the entire site'),
      '#default_value' => $config->get('enable_zebra_system'),
    ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);

    $this->config('zebra_system.adminsettings')
      ->set('enable_zebra_system', $form_state->getValue('enable_zebra_system'))
      ->save();
  }

}
