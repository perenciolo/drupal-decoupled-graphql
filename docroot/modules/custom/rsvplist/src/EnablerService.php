<?php
/**
 * @file
 * Contains \Drupal\rsvplist\EnablerService
 */

namespace Drupal\rsvplist;

use Drupal\Core\Database\Database;
use Drupal\node\Entity\Node;

/**
 * Defines a service for managing RSVP list enabled for node.
 */
class EnablerService
{
    /**
     * Constructor
     */
    public function __construct()
    {

    }

    /**
     * Sets an individual node to be RSVP enabled.
     *
     * @param \Drupal\node\Entity\Node $node
     */
    public function setEnabled(Node $node)
    {
        if (!$this->isEnabled($node)) {
            $insert = Database::getConnection()->insert('rsvplist_enabled'); // the table.
            $insert->fields(array('nid'), array($node->id()));
            $insert->execute();
        }
    }

    /**
     * Checks if an individual node is RSVP enabled.
     *
     * @param \Drupal\node\Entity\Node $node
     *
     * @return bool
     * Whether the node is enabled for the RSVP functionality.
     */
    public function isEnabled(Node $node)
    {
        if ($node->isNew()) {
            return false;
        }

        // Table alias.
        $select = Database::getConnection()->select('rsvplist_enabled', 're');
        // Select field nid.
        $select->fields('re', array('nid'));
        // Where nid equals $node->id().
        $select->condition('nid', $node->id());
        // Execute query.
        $results = $select->execute();
        return !empty($results->fetchCol());
    }

    /**
     * Deletes enabled settings for an individual node.
     *
     * @param \Drupal\node\Entity\Node $node
     */
    public function delEnabled(Node $node)
    {
        $delete = Database::getConnection()->delete('rsvplist_enabled');
        $delete->condition('nid', $node->id());
        $delete->execute();
    }
}
